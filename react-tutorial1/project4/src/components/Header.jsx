import React from 'react'
import meme from './../assets/meme.png';
import './Header.css'

function Header() {
  return (
    <header>
      
      <div className='header-img-container'>
        <img src={meme} alt="meme"/>
      </div>
      <h1>Meme Generator</h1>  
    </header>
  )
}

export default Header
