const express = require('express')
const Event = require('../models/eventModel')
const {createEvent,getEvents,getSingleEvent,deleteSingleEvent,updateSingleEvent} = require('../controllers/userController')
const router = express.Router()

router.get('/',getEvents)

router.get('/:id',getSingleEvent)

router.post('/',createEvent)

router.delete('/:id',deleteSingleEvent)

router.patch('/:id',updateSingleEvent)


module.exports = router