import React from 'react'
import JokesData from './JokesData'
import Joke from './Joke'

function JokesDataPage() {

  const jokes = JokesData.map((joke) => {
    return (
      <Joke 
      setUp = {joke.setUp} 
      punchline ={joke.punchline} >
      </Joke>
    )})

  return (
    <div>
      {jokes}
    </div>
  )
}

export default JokesDataPage
