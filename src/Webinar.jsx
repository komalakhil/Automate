import React from 'react'
import Header from './Header'
import Body from './Body'
import Navbar from './components/Navbar'
import Footer from './Footer'


function Webinar() {
  return (
    <div>
    <div className='z-40 bg-base-200 fixed left-0 top-0'>
      <br></br>
      <div>
      <Header value='Lets webify!'/>
      </div>
      <br></br>
      <Navbar/>
    </div>
      <Body title='Technical Webinar'/>
      <Footer/>
  </div>
  )
}

export default Webinar