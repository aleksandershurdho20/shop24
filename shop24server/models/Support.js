const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema;


const supportSchema = new mongoose.Schema({
    title: {
        type: String,
        max: 30,
        required: true,

    },
    description: {
        type: String,
        required: true,

    },
    product: {
        type: ObjectId,
        ref: 'Product',
        required: true,

    },
    vendor: {
        type: ObjectId,
        ref: 'User',
        required: true,

    },
    user: {
        type: ObjectId,
        ref: 'User',
        required: true,

    },
    issue_status: {
        type: Boolean,
        default: true
    },
    priority: {
        type: String
    }



}, { timestamps: true })

module.exports = mongoose.model('Support', supportSchema)