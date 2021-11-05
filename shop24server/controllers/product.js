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

const updateProduct = async (req, res) => {
    try {
        const id = req.params.id
        const updatedProduct = await Product.findByIdAndUpdate(id, {
            $set: req.body
        },
            { new: true }
        )
        res.json({ updatedProduct })
    } catch (error) {
        res.status(500).send("Server error");
    }
}
const getProduct = async (req, res) => {
    try {
        const id = req.params.id
        const product = await Product.findById(id)
        res.json({ product })
    } catch (error) {
        res.status(500).send("Server error");

    }
}
const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id
        const product = await Product.findByIdAndDelete(id)
        res.status(200).send("Product deleted!")
    } catch (error) {
        res.status(500).send("Server error");

    }
}
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.json({ products })
    } catch (error) {
        res.status(500).send("Server error");

    }
}

const filterProducts = async (req, res) => {
    try {
        let products;
        const category = req.query.category
        const newProducts = req.query.new;
        if (category) {
            products = await Product.find({
                categories: {
                    $in: [category]
                }
            })
        }
        else if (newProducts) {
            products = await Product.find().sort({ createdAt: -1 }).limit(1);

        }

        res.json({ products })
    } catch (error) {
        res.status(500).send("Server error");

    }
}
module.exports = {
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct,
    getAllProducts,
    filterProducts
}