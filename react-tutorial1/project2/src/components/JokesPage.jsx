import React from 'react'
import Joke from "./Joke"

function JokesPage() {
  return (
    <div>
      <Joke 
        setUp = "Why don’t programmers like nature?"
        punchline = "It has too many bugs."
      />
      <Joke 
        setUp = "Why did the coffee file a police report?"
        punchline = "It got mugged."
      />
      <Joke 
        setUp = "Why don’t skeletons fight each other?"
        punchline = "They don’t have the guts."
      />
    </div>
  )
}

export default JokesPage
