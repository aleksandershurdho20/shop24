const Support = require('../models/Support')



const createSupport = async (req, res) => {
    try {
        const support = await new Support(req.body)
        await support.save();
        res.json({ support })
    } catch (error) {
        res.status(500).send("Server Error!")
    }
}

const getAllSupportIssues = async (req, res) => {
    try {
        const supports = await Support.find({}).populate('user', '_id username').populate('vendor', '_id username').populate('product')
        res.json({ supports })
    } catch (error) {

        res.status(500).send("Server Error!")

    }
}
module.exports = {
    createSupport,
    getAllSupportIssues
}