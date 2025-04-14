
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const userSchema= new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            require: true
        },
        lastname:{
            type: String
        }
    },
    email:{
        type: String,
        minLength: [5, 'Email must be at least 5 character long'],
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true,
        select: false // ab jab bhi ham user ko print karenge to ye password nahi jayega.... also jab bhi ham koi find query lagayenge tab bhi password by default nahi aayega iske liye ham use karenge .select('+password')
    },
    socketId:{ // socket id ki jarurat tab hoti h jab ham live location share/track krte h....
        type: String
    }
})


userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
};

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
};


const userModel = mongoose.model('user', userSchema);


module.exports = userModel;