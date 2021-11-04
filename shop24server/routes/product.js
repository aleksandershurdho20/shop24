const express = require('express')

const router = express.Router();
const { createProduct } = require('../controllers/product.js')
const { authorize } = require('../middlewares/verifyToken')

router.post('/create/product', authorize, createProduct)
module.exports = router
