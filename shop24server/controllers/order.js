const Order = require('../models/Order.js')

const createOrder = async (req, res) => {
    try {
        const order = new Order(req.body)
        await order.save()
        res.status(200).json({ order })
    } catch (error) {
        res.status(500).send("Server error");
    }
}
const getUserOrder = async (req, res) => {
    try {
        const id = req.params.id
        const order = await Order.find({ _id: id })
        res.json({ order })
    } catch (error) {
        res.status(500).send("Server error");

    }
}
const updateOrder = async (req, res) => {
    try {
        const id = req.params.id
        const updatedOrder = await Order.findByIdAndUpdate(id, {
            $set: req.body
        },
            { new: true }
        )
        res.json({ updatedOrder })
    } catch (error) {
        res.status(500).send("Server error");
    }
}
const deleteOrder = async (req, res) => {
    try {
        const id = req.params.id
        await Order.findByIdAndDelete(id)
        res.status(200).send("Order deleted!")
    } catch (error) {
        res.status(500).send("Server error");

    }
}

const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({})
        res.json({ orders })
    } catch (error) {
        res.status(500).send("Server error");

    }
}
const allOrdersIncome = async (req, res) => {
    const date = new Date()
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1))
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1))

    try {
        const income = await Order.aggregate([
            {
                $match: {
                    createdAt: { $gte: previousMonth }
                }
            },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount"
                }
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" }
                }
            }
        ])


        res.json({ incomes: income })
    } catch (error) {
        res.status(500).send("Server error");

    }
}

module.exports = {
    createOrder,
    getUserOrder,
    updateOrder,
    deleteOrder,
    getAllOrders,
    allOrdersIncome
}