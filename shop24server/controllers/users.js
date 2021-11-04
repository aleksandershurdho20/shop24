const User = require('../models/User.js')


const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({})
        res.json({ users })
    } catch (error) {
        res.status(500).send("Server error");
    }
}

const updateUser = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findByIdAndUpdate(id, {
            $set: req.body
        },
            { new: true }
        )
        res.json({ user })
    } catch (error) {
        res.status(500).send("Server error");

    }
}

module.exports = {
    getAllUsers,
    updateUser
}