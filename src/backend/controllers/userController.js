const Event  = require('../models/eventModel')
const mongoose = require('mongoose')

//creating a Event
const createEvent = async (req,res) =>{
    const {name,type} = req.body
    try{
        const event = await Event.create({name,type})
        res.status(200).json(event)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

//Get all events
const getEvents = async (req,res) =>{
    const events = await Event.find({}).sort({createdAt : -1})

    res.status(200).json(events)
}

//Get single event
const getSingleEvent = async (req,res) =>{
    const {id} = req.params

    //Checking If valid Id or not
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such event'})
    }
    
    //Getting the event by id
    const events = await Event.findById(id)

    //If no such event is found with that id
    if(!events){
        return res.status(404).json({error:error.message})
    }
    
    res.status(200).json(events)

}

//Delete single event

const deleteSingleEvent = async (req,res) =>{
    const {id} = req.params

    //Checking If valid Id or not
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such event'})
    }

    //Deleting according to the id
    const events = await Event.findOneAndDelete({_id:id})

    //If no such event is found with that id
    if(!events){
        return res.status(404).json({error:'No such event'})
    }
    res.status(200).json(events)
}

//Update single event

const updateSingleEvent = async (req,res) =>{
    const {id} = req.params

    //Checking If valid Id or not
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such event'})
    }

    //Finding and Updating according to the id
    const events = await Event.findOneAndUpdate({_id:id},{
        ...req.body
    })

    //If no such event is found with that id
    if(!events){
        return res.status(404).json({error: 'No such event'})
    }

    res.status(200).json(events)
}

module.exports = {createEvent,getEvents,getSingleEvent,deleteSingleEvent,updateSingleEvent}