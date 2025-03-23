import './App.css'
import {useState,useEffect} from 'react';
import Dice from './Dice'
import { useWindowSize } from "@uidotdev/usehooks";
import Confetti from 'react-confetti'


function App() {
  const [dice,setDice] = useState(()=>generateObjArray()) //arrow function only runs once, not everytime the component is rendered
  const { width, height } = useWindowSize()

  function isWon(){
    let number = dice[0].value;
    for(let i in dice){
      if(dice[i].isHeld === false)
        return false
      if(dice[i].value !== number)
        return false
    }
    return true;
  }

  function generateObjArray(){
    const array = []
    for(let i=0; i < 10; i++) {
      const obj = {}
      obj.value = Math.floor(Math.random() * 6) +1
      obj.isHeld = false
      obj.id = i + 1
      array.push(obj)
    }
    return array
  }

  function handleRoll(){
    setDice(prevDice => prevDice.map(dice=>{
      if(dice.isHeld === false){
        return {...dice, value: Math.floor(Math.random() * 6) +1}
      }else{
        return dice
      }
    }))
  }

  function hold(id){
    setDice(prevDice => prevDice.map(dice =>{
      if(dice.id === id){
        return {...dice, isHeld: !dice.isHeld}
      }else{
        return dice
      }
    }))
    
  }

  const diceElements = dice.map((obj) => {
    return(
      <Dice 
        key={obj.id} 
        value={obj.value} 
        isHeld={obj.isHeld} 
        hold={hold} 
        id={obj.id}>
      </Dice>
    )
  })


  function newGame(){
    setDice(generateObjArray())
  }

  return (
    <>
      <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all it at its current value between rolls.</p>
        {console.log(generateObjArray())}
        <div className='dice-container'>
          {diceElements}
        </div> 

        <button className='roll-btn' 
          onClick={ isWon() ? newGame : handleRoll}>
          {isWon() ? "NEW-GAME":"ROLL" }
          {isWon() && <Confetti
          width={width}
          height={height}
          />}
        </button>
      </main>
    </>
  )
}

export default App
