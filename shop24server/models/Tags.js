const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema(
    {
        tags: [
            {
                title: {
                    type: String,
                    minlength: 3,
                    maxlength: 100,
                },
            },
        ],
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Tags", tagSchema);
