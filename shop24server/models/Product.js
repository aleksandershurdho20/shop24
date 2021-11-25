const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema;


const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    categories: {
        type: Array,

    },
    size: {
        type: Array,

    },
    color: {
        type: Array,

    },
    price: {
        type: Number,
        required: true,

    },
    inStock: {
        type: Boolean,
        default: true
    },
    tags: {
        type: [ObjectId],
        ref: "Tags"
    }
}, {
    timestamps: true
})


module.exports = mongoose.model('Product', productSchema)