
const userModel = require('../models/user.model');
const userService = require('../services/user.service')
const {validationResult} = require('express-validator')
const blacklistTokenModel = require('../models/blacklistToken.model');



module.exports.registerUser = async (req, res, next) => {
    const error = validationResult(req); // it will request the errors throwing in the validation page from the user.route.js
    if(!error.isEmpty()){
        console.log("Validation Errors:", error.array());
        return res.status(400).json({ error: error.array()}); // errors.array me saare error save ho jayenge
    }

    const {fullname, email, password } = req.body;
    console.log("Received Data:", req.body);

    const isUserAlreadyExists = await userModel.findOne({email});

    if(isUserAlreadyExists) {
        return res.status(400).json({message: "User Already exists!"});
    }


    const hashedPassword = await userModel.hashPassword(password); // ye req.body se password le lega ye


    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    });

    const token = user.generateAuthToken();

    console.log("completed")

    res.status(201).json({token, user});
}


module.exports.loginUser = async (req, res, next) => {
   try {
     const error = validationResult(req);
     if(!error.isEmpty()){
         return res.status(400).json({ error: error.array()});
     }
 
     const {email, password} = req.body;
 
     const user = await userModel.findOne({ email}).select('+password');
 
 
     if(!user){
         return res.status(401).json({message: "Invalid email or password"})
     }
 
     const isMatch = await user.comparePassword(password);
 
     if(!isMatch){
         return res.status(401).json({message: "Invalid email or Password"})
     }
 
     const token = user.generateAuthToken();
 
     res.cookie("token", token, {
         httpOnly: true,
         secure: true, 
         sameSite: "None"
     });
 
     res.status(200).json({ token, user});
   } catch (error) {
    console.log("Error while login", error);
   }
}


module.exports.getUserProfile = async (req, res, next) => {
    res.status(200).json(req.user); // ye authmiddleware me define kra h 
}


module.exports.logoutUser = async (req, res, next) => {
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];

    await blacklistTokenModel.create({ token });

    res.status(200).json({message: "Logged Out Successfully"});
}

