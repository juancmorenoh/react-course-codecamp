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

      <ul>
        <li>{props.obj.upvotes}</li>
        <li>{props.obj.downvotes}</li>
        <li>{props.obj.comments.user1}</li>
        <li>{props.obj.comments.user2}</li>
      </ul>
      
    </div>
    </>
    

    
  )
}

export default Joke
