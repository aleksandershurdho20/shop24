const express = require('express')
const router = express.Router()
const { createTags, getAllTags } = require('../controllers/tags.js')
const { authorize } = require('../middlewares/verifyToken')


router.post('/create/tags', authorize, createTags)
router.get('/tags', authorize, getAllTags)
module.exports = router;