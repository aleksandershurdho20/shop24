const express = require('express')
const router = express.Router();
const { getAllUsers, updateUser, getUserStatisticsByYear } = require('../controllers/users')
const { authorize } = require('../middlewares/verifyToken')
router.get('/users', getAllUsers)
router.put('/update/user/:id', authorize, updateUser)
router.get('/users/statistics', authorize, getUserStatisticsByYear)

module.exports = router