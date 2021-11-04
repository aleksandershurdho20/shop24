const express = require('express')
const { authorize } = require('../middlewares/verifyToken')

const router = express.Router();
const { createCart, getUserCart, deleteCart, updateCart } = require('../controllers/cart.js')
router.post('/create/cart', createCart)
router.get('/cart/:id', getUserCart)
router.put('/update/cart/:id', updateCart)
router.put('/delete/cart/:id', deleteCart)


module.exports = router
