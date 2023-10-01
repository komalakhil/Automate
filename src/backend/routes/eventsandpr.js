const express = require('express');
const { createVolunteer, getVolunteers } = require('../controllers/eventsandprController');
const router = express.Router();

router.post('/', createVolunteer);
router.get('/', getVolunteers);

module.exports = router;
