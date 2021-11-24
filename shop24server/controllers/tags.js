const tags = require('../models/Tags')

const createTags = async (req, res) => {

    try {
        const tags = new tags(req.body)
        await tags.save()
        res.json({ tags })

    } catch (error) {
        res.status(500).send('Server errorr!')
    }

}

module.exports = {
    createTags
}