const mongoose = require("mongoose");
const title = new mongoose.Schema({
    title: {
        type: String,
        minlength: 3,
        maxlength: 100,
    }
}, { timestamps: true })

const tagSchema = new mongoose.Schema(
    {
        tags: {
            type: [title]
        }

    }

);

module.exports = mongoose.model("Tags", tagSchema);
