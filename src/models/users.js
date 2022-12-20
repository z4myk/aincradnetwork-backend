const mongoose = require("mongoose");
const jwt = require('jsonwebtoken')
const userSchema = mongoose.Schema({
    nick: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    }
},
{
    timestamps: true,
}
)
module.exports = mongoose.model('users', userSchema)