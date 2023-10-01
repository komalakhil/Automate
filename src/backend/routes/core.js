const express = require('express');
const { createcoreMember, getcoreMembers } = require('../controllers/coreController');
const router = express.Router();

router.post('/', createcoreMember);
router.get('/', getcoreMembers);

module.exports = router;
