const mongoose = require('mongoose')

const Schema = mongoose.Schema

const formSchema = new Schema({
    name :{
        type : String,
        required : true
    },
    type : {
        type : String,
        required : true
    },
    eventname :{
        type : String,
        required : true
    },
    date :{
        type :String,
        required : true
    }
},
{
    timestamps : true
})

module.exports = mongoose.model('Form',formSchema)