const EventsVolunteer  = require('../models/eventsandprModel')
const mongoose = require('mongoose')


//Adding a Volunteer
const createVolunteer = async (req, res) => {
    const { name, email } = req.body; 
    try {
      const volunteer = await EventsVolunteer.create({ name, email });
      res.status(200).json(volunteer);
    } catch (error) {
      res.status(400).json({ error: 'This is create error' });
    }
  };


// Get all volunteers
const getVolunteers = async (req, res) => {
    try {
        const volunteers = await EventsVolunteer.find({}).sort({createdAt : -1})
        res.status(200).json(volunteers)
      } catch (error) {
        res.status(400).json({ error: 'This is fishy' });
    }
    
};


module.exports = {createVolunteer,getVolunteers}