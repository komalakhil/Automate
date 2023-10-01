const Event  = require('../models/formModel')
const mongoose = require('mongoose')


//Adding a Event
// const createEvent = async (req, res) => {
//     const { name, type } = req.body; 
//     if (!name || !type) {
//       return res.status(400).json({ error: 'Name and type are required fields' });
//     }
//     try {
//       const event = await Event.insertMany({ name, type });
//       res.status(200).json(event);
//     } catch (error) {
//       res.status(400).json({ error: 'This is create error' });
//     }
//   };


// Get all events
const getEvents = async (req, res) => {
    try {
        const event = await Event.find({}).sort({createdAt : -1})
        res.status(200).json(event)
      } catch (error) {
        res.status(400).json({ error: 'This is fishy' });
    }
    
};

const event = async (req, res) => {
  try{
    console.log("RequestBody",req.body)
      const { name,type,eventname,date } = req.body;
    console.log(name)
    console.log(type)
    console.log(eventname)
    console.log(date)
  const existingEvent = await Event.findOne({ 'name':name,'type':type,'eventname':eventname,'date':date });

  if (existingEvent) {
    return res.status(400).json({ error: "Event with the same name already exists." });
  }

  const newEvent = new Event({
    'name':name,
    'type':type,
    'eventname':eventname,
    'date':date
  });
  console.log(newEvent)
  await newEvent.save();
  
  res.status(201).json({ message: "Event created successfully", event: newEvent });
  }catch(err){
      res.status(500).json({ error: err.message });
    }

}

module.exports = {event,getEvents}