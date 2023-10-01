import React from 'react'
import {useState,useEffect} from 'react'


function Events() {
  const [volunteer,setVolunteer] = useState(null)
  const submiticon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
      />
    </svg>
  );
  useEffect(()=>{
    const fetchVolunteer = async() => {
      try {
        const response = await fetch('/api/eventsandpr');
        if (response.ok) {
          const json = await response.json();
          setVolunteer(json);
        } else {
          console.error('Failed to fetch volunteers');
        }
      } catch (error) {
        console.error('Error while fetching volunteers:', error);
      }
    }

    fetchVolunteer()
  },[])
  return (
    <div className="border border-dashed rounded px-2">
        <div className="flex flex-row space-x-10 mt-3">
          <div className="flex flex-row space-x-6">
            <label className="label">
              <span className="label-text text-teal-100 text-base block">Host for the event</span>
            </label>
            <select className="select select-bordered font-sans bg-white text-black h-5">
              <option>Pick one</option>
              {volunteer && volunteer.map((volunteer)=>(
                <option>{volunteer.name}</option>
              ))}
            </select>
            <br></br>
            <label className="label">
              <span className="label-text text-teal-100 text-base block">Point of Contact (MuraliMohan Sir)</span>
            </label>
            <select className="select select-bordered font-sans bg-white text-black h-5">
              <option>Pick one</option>
              {volunteer && volunteer.map((volunteer)=>(
                <option>{volunteer.name}</option>
              ))}
            </select>
            <br></br>
          </div>
        </div>
        <div className="flex flex-row space-x-12 mt-3">
          <div className="flex flex-row space-x-7">
            <label className="label">
              <span className="label-text text-teal-100 text-base block">Guest Hospitality</span>
            </label>
            <select className="select select-bordered font-sans bg-white text-black h-5">
              <option>Pick one</option>
              {volunteer && volunteer.map((volunteer)=>(
                <option>{volunteer.name}</option>
              ))}
            </select>
            <br></br>
            <label className="label">
                <span className="label-text text-teal-100 text-base block">Auditorium booking</span>
                </label>
                <select className="select select-bordered font-sans bg-white text-black h-5">
                <option>Pick one</option>
                {volunteer && volunteer.map((volunteer)=>(
                <option>{volunteer.name}</option>
                ))}
                </select>
                <br></br>
          </div>
        </div>
        
        <div className="mt-10"> 
          <label className="cursor-pointer label">
            <h1 className="label-text text-teal-100 text-base block">
              Select On day volunteers
            </h1>
          </label>
          {volunteer && volunteer.map((volunteer)=>(
                <label className="cursor-pointer label px-8">
                <span className="label-text text-teal-100 text-base ml-7">{volunteer.name}</span>
                <input type="checkbox" className="checkbox checkbox-accent mr-64" />
              </label>
          ))}
        </div>
        <div className="flex justify-center mt-10 mb-10">      
          <button className = 'btn text-teal-100 btn-outline border rounded px-4  py-2 hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black duration-300'>
                  <div className="flex items-center">
                  {submiticon} 
                  <span className="ml-0.5">Submit</span>
                  </div>
          </button>
      </div>
      </div>  
  )
}

export default Events