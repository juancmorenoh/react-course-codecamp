import React from 'react'
import chef from '../assets/cooking.png';
import './Header.css'

function Header() {
  return (
    <header>
      <div className='image-container'>
        <img src={chef} alt="chef" />
      </div> 
      <h1>Chef Claude</h1>
    </header>
  )
}

export default Header
