const coreMember  = require('../models/coreModel')
const mongoose = require('mongoose')


//Adding a Volunteer
const createcoreMember = async (req, res) => {
    const { name, email } = req.body; 
    try {
      const member = await coreMember.create({ name, email });
      res.status(200).json(member);
    } catch (error) {
      res.status(400).json({ error: 'This is create error' });
    }
  };


// Get all volunteers
const getcoreMembers = async (req, res) => {
    try {
        const members = await coreMember.find({}).sort({createdAt : -1})
        res.status(200).json(members)
      } catch (error) {
        res.status(400).json({ error: 'This is fishy' });
    }
    
};


module.exports = {createcoreMember,getcoreMembers}