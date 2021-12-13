const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema

const message = new mongoose.Schema({
    text: {
        type: String,

    }
}, { timestamps: true })
const chatSchema = new mongoose.Schema({
    message: {
        type: [message]
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