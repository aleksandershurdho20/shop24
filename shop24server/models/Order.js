const mongoose = require("mongoose")

const { ObjectId } = mongoose.Schema;

const orderSchema = new mongoose.Schema({
    user: {
        type: ObjectId,
        ref: "User",
    },
    products: [{
        product: {
            type: ObjectId,
            ref: "Product",
        },
        quantity: {
            type: Number,
            default: 1
        }
    }],
    amount: {
        type: Number,
        default: 1,
        required: true,
    },
    adress: {
        type: Object,
        required: true,

    },
    status: {
        type: String,
        default: "Pending"
    }
})


module.exports = mongoose.model("Order", orderSchema)