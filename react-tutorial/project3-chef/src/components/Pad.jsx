import {useState} from 'react'
import './Pad.css'

function Pad(props) {

  return (
    <button onClick={() => props.toggle(props.id)} className={`pad-btn ${props.on?"on":""}`}   style={{backgroundColor: props.color}}></button>
  )
}

export default Pad
