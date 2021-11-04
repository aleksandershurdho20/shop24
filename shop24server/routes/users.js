const express = require('express')
const router = express.Router();
const { getAllUsers, updateUser } = require('../controllers/users')
const { authorize } = require('../middlewares/verifyToken')
router.get('/users', getAllUsers)
router.put('/update/user/:id', authorize, updateUser)

module.exports = router