const express = require('express');
const {event,getEvents} = require('../controllers/formController');
const router = express.Router();

router.post('/', event);
router.get('/', getEvents );


module.exports = router;
