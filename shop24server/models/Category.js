const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    categories: {
        type: Array
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Categories", categorySchema)