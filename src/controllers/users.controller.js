const userSchema = require('../models/users');
const asyncHandler = require('express-async-handler')



const registerUser = asyncHandler(async (req, res) => {
    const {nick, email, password } = req.body;

    const userExist = await userSchema.findOne({email})

    if(userExist) {
        res.status(400);
        throw new Error('User already exist');

    }

    const user = await userSchema.create({nick, email, password})

    if(user){
        res.status(201).json({
            _id: userSchema._id,
            nick: userSchema.nick,
            email: userSchema.email,
            isAdmin: userSchema.isAdmin
        })
    }else{
        res.status(400);
        throw new Error('error occured')
    }

    res.json({
        nick,
        email,
    })
})

module.exports = {
    registerUser,
}