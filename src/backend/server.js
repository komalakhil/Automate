require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require("cors")
const AutomateRoutes = require("./routes/automate")
const VolunteerRoutes = require("./routes/volunteer")
const EventsandPrRoutes = require("./routes/eventsandpr")
const DesignRoutes = require("./routes/design")
const TechRoutes = require("./routes/tech")
const CodingRoutes = require("./routes/coding")
const SubmitRoute = require("./routes/form")
const CoreRoute = require("./routes/core")
const sendEmail = require("./controllers/emailController");

const app = express()

app.use(cors());
//middleware
app.use(express.json())

app.use(bodyParser.json());


// Middleware to parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/automate',AutomateRoutes)

app.use('/api/volunteers',VolunteerRoutes)

app.use('/api/eventsandpr',EventsandPrRoutes)

app.use('/api/design',DesignRoutes)

app.use('/api/tech',TechRoutes)

app.use('/api/coding',CodingRoutes)

app.use('/api/submit-form',SubmitRoute)

app.use('/api/core',CoreRoute)

app.route("/api/sendemail").post((req, res) => {
    try {
      console.log('Request',req);
      const email = req.body.email;
      const options = {
        from: process.env.EMAIL,
        to: email,
        subject: "You have created a event",
        text: "Hello!" + req.body.name + "You have just finalised a event\nThis mail is sent to you via Automate app.\n\nThanking you.",
      };
      sendEmail(options);
      res.status(200).json("Email has been sent successfully");
    } catch (err) {
      res.status(500).json("Internal error encountered!!");
    }
  });


mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT,() => {
            console.log('Database connected and Server Started!',process.env.PORT);
        })
    })
    .catch((error)=>{
        console.log(error)
    })

