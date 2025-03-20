import React from 'react'
import Joke from "./Joke"

function JokesPage() {
  const obj = {
    upvotes : 10,
    downvotes : 34,
    comments: {
      user1: "Great Joke!",
      user2: "Not funny",
      user3: "I agree!"
    }
  }
  const obj1 = {
    upvotes : 54,
    downvotes : 45,
    comments: {
      user1: "Cool!",
      user2: "Meahhh",
      user3: "Boo!"
    }
  }
  const obj2 = {
    upvotes : 32,
    downvotes : 21,
    comments: {
      user1: ">:)",
      user2: "This is funny!",
      user3: "I agree!"
    }
  }
  return (
    <div>
      <Joke 
        setUp = "Why don’t programmers like nature?"
        punchline = "It has too many bugs."
        obj = {obj}
      />
      <Joke 
        setUp = "Why did the coffee file a police report?"
        punchline = "It got mugged."
        obj = {obj1}
      />
      <Joke 
        setUp = "Why don’t skeletons fight each other?"
        punchline = "They don’t have the guts."
        obj = {obj2}
      />
    </div>
  )
}

export default JokesPage
