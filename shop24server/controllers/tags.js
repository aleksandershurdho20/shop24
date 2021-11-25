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

module.exports = {
    createTags,
    getAllTags
}