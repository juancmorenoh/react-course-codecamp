import React from 'react'
import empty from './../assets/starempty.png';
import full from './../assets/starfull.png';

function Star(props) {
  return (
    <div onClick={props.handleClick} className='image-container star'>
        <img src={props.isFilled ? (full):(empty)} alt="star" />
    </div>
  )
}

export default Star
