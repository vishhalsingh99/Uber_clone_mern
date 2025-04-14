const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const captainSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true
        },
        lastname:{
            type: String
        }
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        select: false
    },
    socketId: {
        type: String
    },
    status:{
        type: String,
        enum: ["active", "inactive"],
        default: "active"
    },
    vehicle:{
        color:{
            type: String, 
            required: true,
            minlength: [2, "Color must be at least 2 character long"]
        },
        plate:{
            type: String,
            required: true,
            minlength: [5, "Plate must be at least 5 character long"]
        },
        capacity:{
            type: Number,
            required: true,
            min: [1, "Capacity must be at least 1"]
        },
        vehicleType:{
            type: String,
            enum: ["car", "bike", "auto", "bus"],
            required: true
        }
    },
    location: {
        lat:{
            type: Number
        },
        lng:{
            type: Number
        }
    }
})


captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id}, process.env.JWT_SECRET, { expiresIn: '24h'});
    return token;
}


captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const captainModel = mongoose.model('captain', captainSchema);

module.exports = captainModel;