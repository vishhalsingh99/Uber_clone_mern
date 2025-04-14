const userModel = require('../models/user.model'); // bcz we need to interact with the database to authanticate the user
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const blackListTokenModel = require('../models/blacklistToken.model')
const captainModel = require('../models/captain.model')


module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if(!token){
        return res.status(401).json({message: "Unauthorized - No Token Found"});
    }

    const isBlacklisted = await blackListTokenModel.findOne({token: token});
    if(isBlacklisted){
        return res.status(401).json({message: "Unauthorized - Token Blacklisted"});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);

        req.user = user;

        return next();
    } catch (error) {
        return res.status(401).json({message: "Unauthorized"});
    };
}

module.exports.authCaptain = async ( req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if(!token){
        return res.status(401).json({message: "Unauthorized - No Token Found"});
    }

    const isBlacklisted = await blackListTokenModel.findOne({token: token});
    if(isBlacklisted){
        return res.status(401).json({message: "Unauthorized - Token Blacklisted"});
    }
    console.log("NO error")

    try {
        console.log("1")
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("2")
        const captain = await captainModel.findById(decoded._id);
        console.log("3")

        req.captain = captain;

        return next();
    } catch (error) {
        return res.status(401).json({message: "Unauthorized -- Invalid"});
    };
}