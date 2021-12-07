const express = require('express')
const router = express.Router()
const { createTags, getAllTags, getTag, deleteTag, updateTag } = require('../controllers/tags.js')
const { authorize } = require('../middlewares/verifyToken')


router.post('/create/tags', authorize, createTags)
router.get('/tags', authorize, getAllTags)
router.get('/tag/:id', authorize, getTag)
router.delete('/tag/:id/tag/:title', authorize, deleteTag)
router.put('/tag/:id', authorize, updateTag)


module.exports = router;