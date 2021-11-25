const express = require('express')
const router = express.Router()
const { createTags, getAllTags, getTag, deleteTag } = require('../controllers/tags.js')
const { authorize } = require('../middlewares/verifyToken')


router.post('/create/tags', authorize, createTags)
router.get('/tags', authorize, getAllTags)
router.get('/tag/:id', authorize, getTag)
router.delete('/tag/:id/tag/:id', authorize, deleteTag)

module.exports = router;