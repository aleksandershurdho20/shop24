const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema
const chatSchema = new mongoose.Schema({
    message: {
        type: String
    },
    sender: {
        type: ObjectId,
        ref: 'User',
    },
    receiver: {
        type: ObjectId,
        ref: 'User',
    },
    product: {
        type: ObjectId,
        ref: 'Product'
    }
}, { new: true })

module.exports = mongoose.model('Chat', chatSchema)