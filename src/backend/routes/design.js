const express = require('express');
const { createVolunteer, getVolunteers } = require('../controllers/designController');
const router = express.Router();

router.post('/', createVolunteer);
router.get('/', getVolunteers);

module.exports = router;
