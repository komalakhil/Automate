// import React from 'react'
import Header from './Header'
// import { useEffect,useState } from 'react'

// function Summary() {
//   const [event,setEvent] = useState(null)
//   useEffect(()=>{
//     const fetchEvent = async() => {
//         const response = await fetch('/api/automate')
//         const json = await response.json()

//         if(response.ok){
//           setEvent(json)
//         }
//     }

//     fetchEvent()
//   },[])
//   return (
//     <div>
//         <br></br>
//         <Header value='Summary'/>
//         <br></br>
//         {event && event.map((event)=>(
//               <div className="collapse collapse-arrow bg-base-200">
//               <input type="radio" name="my-accordion-2" checked="checked" /> 
//               <div className="collapse-title text-xl font-medium">
//                 {event.name}
//               </div>
//               <div className="collapse-content"> 
//                 <p>{event.type}</p>
//               </div>
//             </div>
//         ))}
//     </div>
//   )
// }

// export default Summary


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Summary = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/api/submit-form'); // Assuming your API endpoint is /api/events
        setEvents(response.data);
      } catch (error) {
        console.error('Error loading events:', error);
      }
    };

    fetchEvents();
  }, []);

  const icon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
</svg>

const groupedEvents = {};
events.forEach((event) => {
  if (!groupedEvents[event.eventname]) {
    groupedEvents[event.eventname] = [];
  }
  groupedEvents[event.eventname].push(event);
});

  return (
    <div>
      <br></br>
        <Header value='Summary'/>
        <br></br>

        {events.length === 0 ? (
        <div className="flex flex-row justify-center items-center mt-44">
          <h1>{icon}</h1>
          <h1>
            You have no events to display. Create an event by clicking on the Add Event button.
          </h1>
        </div>
      ) :  (Object.keys(groupedEvents).map((eventName) => (
        <div key={eventName}>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              {eventName}
            </div>
            <div className="collapse-content">
              {groupedEvents[eventName].map((event) => (
                <p key={event._id}>{event.name}</p>
              ))}
            </div>
          </div>
        </div>
      ))
    )}
  
    </div>
  );
};

export default Summary;
