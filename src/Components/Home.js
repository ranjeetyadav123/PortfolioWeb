import React from 'react'
import Profile from './Profile'
import Footer from './Footer'
import '../Style/Home.css'
import ContactMe from './ContactMe.js'

export default function Home() {
  return (
    <div className='home-container'>
        
        <Profile/>
        <Footer/> 
        <ContactMe/>
    </div>
  )
}
