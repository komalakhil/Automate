import React from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import Navbar from './components/Navbar'


function Seminar() {
  return (
    <div>
    <div className='z-40 bg-base-200 fixed left-0 top-0'>
      <br></br>
      <div>
      <Header value='It is technical time!'/>
      </div>
      <br></br>
      <Navbar/>
    </div>
      <Body title='Technical Seminar'/>
      <Footer/>
  </div>
  )
}

export default Seminar