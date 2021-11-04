const User = require('../models/User.js')
const { hashPassword, comparePassword } = require('../utils/auth')
const jwt = require('jsonwebtoken')
const register = async (req, res) => {
    const { username, email, password, role } = req.body;


    try {
        const existUser = await User.findOne({ email });
        if (existUser) return res.status(400).send("Email is already taken!");
        const hashedPassword = await hashPassword(password);
        const user = new User({
            username,
            email,
            password: hashedPassword,
            role
        })
        await user.save();
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send("Server error");
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).send("Email or password incorrect");
        const matchPassword = await comparePassword(password, user.password);
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });
        user.password = undefined;
        res.cookie("token", token, { httpOnly: true });
        res.json({ ...user._doc, token });
    } catch (error) {
        console.log(error, 'error')
        res.status(500).send(error);
    }
}

module.exports = {
    register,
    login
}