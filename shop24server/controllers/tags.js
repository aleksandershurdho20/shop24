const Tags = require('../models/Tags')

const createTags = async (req, res) => {
    try {
        const tags = new Tags({ tags: req.body })
        await tags.save()
        res.json({ tags })
        console.log(req.body, 'reqso')
    } catch (error) {
        console.log(error, 'error')
        res.status(500).send('Server errorr!')
    }

}
const getAllTags = async (req, res) => {
    try {
        const tags = await Tags.find({})
        res.json({ tags })
    } catch (error) {
        res.status(500).send('Server errorr!')

    }
}
const getTag = async (req, res) => {
    const id = req.params.id
    try {
        const tag = await Tags.findOne({ _id: id })
        res.json({ tag })
    } catch (error) {

    }
}

const deleteTag = async (req, res) => {
    try {
        const id = req.params.id
        const t = req.params.tag
        const tag = await Tags.findByIdAndUpdate({ _id: id }, {
            $pull: { tags: { _id: t } }
        }).exec()
        res.send("Tag Delete Succesfully!");
    } catch (error) {
        res.status(500).send("Server Errorr!");
    }
}
module.exports = {
    createTags,
    getAllTags,
    getTag,
    deleteTag
}