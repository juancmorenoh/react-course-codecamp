import React from 'react'

function Joke(props) {
  return (
    <>
    <div style={{
      border : "2px solid red",
      margin: "10px",
      padding: "10px"
      }}>

    
      <div className='set-up'>
        <h3>Set-up:</h3>
        <p>{props.setUp}</p>
        
      </div>
      {props.punchline ? (
        <div className='punch-line'>
        <h3>Punch-line:</h3>
        <p>{props.punchline}</p>
      </div>
      ):("")}
      
    </div>
    </>
    

    
  )
}

export default Joke
