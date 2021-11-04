const jwt = require('jsonwebtoken')
const User = require('../models/User')
const verifyToken = (req, res, next) => {
    const header = req.headers.token
    if (header) {
        const token = header.split(" ")[1]

        jwt.verify(token, process.env.JWT_SECRET, (err, res) => {
            if (err) {
                res.status(403).send('Token has expired!')


            }
            req.user = res

            next()
        })
    } else {
        return res.status(401).send('You are not authenticated!')
    }
}



const authorize = (req, res, next) => {

    verifyToken(req, res, async () => {
        const user = await User.findById(req.user._id).exec();
        if (user.role.includes("Admin")) {

            next()
        }
        else {
            res.status(403).send('You are not allowed to do that!')
        }
    })
}
module.exports = {
    verifyToken,
    authorize
}