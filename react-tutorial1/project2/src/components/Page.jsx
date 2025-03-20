import React from 'react'
import "./page.css"

function Page(props) {
  
  return (
    <main>
      <div className='component-wrapper'>
        <div className='left-container'>
          <img className="main-img" src={props.obj.img.img} alt={props.obj.img.name} />
        </div>
        <div className='right-container'>
          <div className='location-container'>
            
            <img className="pin" src="../src/assets/pin.png" alt="marker-map" />
            <p className='title'>{props.obj.country}</p>
            <a href="#">view on google maps</a>
          </div>
          <div>
            <h1>{props.obj.location}</h1>
            <p className='date'>12 Jan, 2021 - 24 Jan 2021</p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            </p>
          </div>
        </div>
      </div>
      
    </main>
  )
}

export default Page
