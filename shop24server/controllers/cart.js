const Cart = require('../models/Cart.js')

const createCart = async (req, res) => {
    try {
        const cart = new Cart(req.body)
        await cart.save()
        res.status(200).json({ cart })
    } catch (error) {
        res.status(500).send("Server error");
        console.log({ error })
    }
}
const getUserCart = async (req, res) => {
    try {
        const id = req.params.id
        const cart = await Cart.findOne({ _id: id }).populate('user', '_id username').populate('products.product').exec()
        res.json({ cart })
    } catch (error) {
        res.status(500).send("Server error");

    }
}
const updateCart = async (req, res) => {
    try {
        const id = req.params.id
        const updatedCart = await Cart.findByIdAndUpdate(id, {
            $set: req.body
        },
            { new: true }
        )
        res.json({ updatedCart })
    } catch (error) {
        res.status(500).send("Server error");
    }
}
const deleteCart = async (req, res) => {
    try {
        const id = req.params.id
        const cart = await Cart.findByIdAndDelete(id)
        res.status(200).send("Cart deleted!")
    } catch (error) {
        res.status(500).send("Server error");

    }
}

module.exports = {
    createCart,
    getUserCart,
    deleteCart,
    updateCart
}