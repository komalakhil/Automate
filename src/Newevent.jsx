import React from 'react'
import Header from './Header'; 
import Navbar from './components/Navbar';




function Newevent() {

  const clickicon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
</svg>


  return (
    <div>
        <br></br>
        <Header value='Add a New Event'/>
        <br></br>
        <Navbar/>
        <div className='flex flex-row justify-center items-center mt-44'>
          <h1>{clickicon}</h1>
          <h1>Click on the above buttons to add a new event</h1>
        </div>
    </div>
  )
}

export default Newevent;