import {useState,useEffect} from 'react'
import WindowTracker from './WindowTracker'

function WindowTrackerParent() {
  const [show, setShow] = useState(true);

  function toggleShow(){
    setShow(prevShow => !prevShow)
  }
  return (
    <div>
      <button onClick={toggleShow}>
        Toggle Window
      </button>
      {show && <WindowTracker />}
    </div>
  )
}

export default WindowTrackerParent
