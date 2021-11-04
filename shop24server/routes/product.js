const express = require('express')

const router = express.Router();
const { createProduct, updateProduct, getProduct, deleteProduct, getAllProducts, filterProducts } = require('../controllers/product.js')
const { authorize } = require('../middlewares/verifyToken')

router.post('/create/product', authorize, createProduct)
router.put('/update/product/:id', authorize, updateProduct)
router.get('/product/:id', authorize, getProduct)
router.delete('/product/:id', authorize, deleteProduct)
router.get('/products', authorize, getAllProducts)
router.get('/products/categories', authorize, filterProducts)

module.exports = router
