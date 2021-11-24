const express = require('express')
const router = express.Router()
const { createTags } = require('../controllers/tags.js')
const { authorize } = require('../middlewares/verifyToken')


router.post('/create/tags', authorize, createTags)

module.exports = router;