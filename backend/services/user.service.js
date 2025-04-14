const userModel = require('../models/user.model');



module.exports.createUser = async({
    firstname, lastname, email, password // this function will take firstname, email, password as an object....
}) => {
    if(!firstname || !email || !password) {
        throw new Error ("All fields are required");
    }

    // this is how we create the user in Express (userModel.create)
    const user = userModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password
    })

    return user;

}