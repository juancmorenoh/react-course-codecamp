import './App.css'
import {useState,useEffect} from 'react';
import Dice from './Dice'

function App() {
  const [dice,setDice] = useState(generateArray())

  function generateArray(){
    const array = []
    for(let i=0; i < 10; i++) {
      array.push(Math.floor(Math.random() * 6) +1)
    }
    return array
  }

  function handleRoll(){
    setDice(generateArray())
  }
  const diceElements = dice.map(num => <Dice value={num} />)

  return (
    <>
      <main>
        {console.log(generateArray())}
        <div className='dice-container'>
          {diceElements}
        </div> 

        <button className='roll-btn' onClick={handleRoll}>ROLL</button>
      </main>
    </>
  )
}

export default App
