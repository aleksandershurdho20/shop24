const express = require('express')
const { sendMessage, getMessages } = require('../controllers/chat')
const router = express.Router()

router.post('/message', sendMessage)
router.get('/messages/:id', getMessages)

module.exports = router