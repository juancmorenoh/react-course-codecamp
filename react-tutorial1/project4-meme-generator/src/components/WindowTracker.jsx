import {useState,useEffect} from 'react'

function WindowTracker() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() =>{
    function wacthWindowWith(){
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", wacthWindowWith)

    return ()=>{
      window.removeEventListener("resize", wacthWindowWith)
    }
  },[])
  return (
    <h1>Window width: {windowWidth} </h1>
  )
}

export default WindowTracker
