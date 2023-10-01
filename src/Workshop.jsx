import React from 'react'
import Navbar from './components/Navbar'
import Body from './Body'
import Header from './Header'
import Footer from './Footer'

function Workshop() {
  return (
    <div>
      <div className='z-40 bg-base-200 fixed left-0 top-0'>
        <br></br>
        <div>
        <Header value='Hurray! New Workshop Loading'/>
        </div>
        <br></br>
        <Navbar/>

      </div>
        <Body title='Workshop'/>
        <Footer/>
    </div>
  )
}

export default Workshop