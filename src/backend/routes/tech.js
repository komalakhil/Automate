const express = require('express');
const { createVolunteer, getVolunteers } = require('../controllers/techController');
const router = express.Router();

router.post('/', createVolunteer);
router.get('/', getVolunteers);

module.exports = router;
