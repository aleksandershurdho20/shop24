const Product = require('../models/Product.js')


const createProduct = async (req, res) => {
    try {
        const product = new Product(req.body)
        await product.save()
        res.status(200).json({ product })
    } catch (error) {
        res.status(500).send("Server error");

    }
}


module.exports = {
    createProduct
}