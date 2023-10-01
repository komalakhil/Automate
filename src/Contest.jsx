import React from 'react'
import Header from './Header'
import Navbar from './components/Navbar'
import Body from './Body'
import Footer from './Footer'

function Contest() {
  return (
    <div>
    <div className='z-40 bg-base-200 fixed left-0 top-0'>
      <br></br>
      <div>
      <Header value='Lets Codify the World'/>
      </div>
      <br></br>
      <Navbar/>

    </div>
      <Body title='Coding Contest'/>
      <Footer/>
  </div>
  )
}

export default Contest