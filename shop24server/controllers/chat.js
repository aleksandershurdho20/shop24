const Chat = require('../models/Chat')


const sendMessage = async (req, res) => {
    try {
        const chat = await new Chat(req.body).save()
        res.json({ chat })
    } catch (error) {
        res.status(500).send('Server Error!')
    }
}


const getMessages = async (req, res) => {
    try {
        const id = req.params.id
        const messages = await Chat.findById({ product: req.params.id })
        res.json({ messages })
    } catch (error) {
        res.status(500).send('Server Error!')

    }
}
module.exports = {
    sendMessage,
    getMessages
}