import React from 'react'
import '../Style/Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-parent'>
            <img src={require('../Data/Home/shape-bg1.png')}
            alt='no internet connection'/>
        </div>
    </div>
  )
}

export default Footer;