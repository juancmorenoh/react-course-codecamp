import {useState, useEffect} from "react"

function StarWars() {
  const [starWarsData, setStarWarsData] = useState({})
  const [count, setCount] = useState(1)

  /** {}
  * Challenge part 1:
  * Fetch the data from this url: "https://swapi.dev/api/people/1"
  * and save it in the starWarsData state. Make sure you don't
  * get stuck in an infinite rendering loop!]
  */
  console.log("render component")
  useEffect(()=>{
    console.log("useEffect runs!")
    fetch(`https://swapi.dev/api/people/${count}`)
    .then(response => response.json())
    .then(data => setStarWarsData(data))
  },[count])

  return (
    <>
    <div>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount (prevCount => prevCount + 1)}>Add</button>
      <pre> {JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
    </>
  )

}
export default StarWars