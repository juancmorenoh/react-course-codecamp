import React from 'react'

function Dice(props) {
  const buttonStyle = {
    backgroundColor: props.isHeld? '#59E391' : 'white'
  }
  
  return (
    
    <button style={buttonStyle} className='dice-btn' onClick={() => props.hold(props.id)}>{props.value}</button>
  )
}

export default Dice
