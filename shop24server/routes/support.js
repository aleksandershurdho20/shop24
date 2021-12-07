const express = require('express')
const { authorize } = require('../middlewares/verifyToken')
const { createSupport, getAllSupportIssues } = require('../controllers/support')
const router = express.Router();
router.post('/support', createSupport)
router.get('/supports', getAllSupportIssues)
module.exports = router;