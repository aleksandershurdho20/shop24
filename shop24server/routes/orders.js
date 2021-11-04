const express = require('express')

const router = express.Router();
const { createOrder, getUserOrder, updateOrder, deleteOrder, getAllOrders, allOrdersIncome } = require('../controllers/order.js')
const { authorize } = require('../middlewares/verifyToken')

router.post('/create/order', createOrder)
router.get('/order/:id', getUserOrder)
router.get('/order/update/:id', updateOrder)
router.delete('/order/:id', deleteOrder)

router.get('/orders', authorize, getAllOrders)
router.get('/orders/incomes', authorize, allOrdersIncome)
module.exports = router