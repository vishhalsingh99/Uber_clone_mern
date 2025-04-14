const mongoose = require("mongoose");
const { create } = require("./user.model");

const blacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 24*60*60,
    },
    });

    module.exports = mongoose.model("blacklistToken", blacklistTokenSchema);