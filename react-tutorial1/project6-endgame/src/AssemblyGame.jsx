import {useState} from 'react'
import { languages } from './../languages.js';
import clsx from 'clsx';
import { getFarewellText,getRandomWord } from '../utils.js';
import { useWindowSize } from "@uidotdev/usehooks";
import Confetti from 'react-confetti'

function AssemblyGame() {
  //STATE VALUES
  const [currentWorld,setCurrentWorld] = useState(() => getRandomWord())
  const [guessedLetters, setGuessedLetters] = useState([])

  const { width, height } = useWindowSize()//confetti
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  
  const wrongGuessesCount = guessedLetters.filter(letter => 
    !currentWorld.includes(letter)).length
    console.log(wrongGuessesCount)

  const isGameWon = currentWorld.split("").every(letter =>
    guessedLetters.includes(letter)
  )
  const isGameLost = wrongGuessesCount >= languages.length-1
  const isGameOver = isGameWon || isGameLost

  function reset(){
    setCurrentWorld(getRandomWord())
    setGuessedLetters([])
  }

  function message(){
    let m
    if(currentWorld.includes(guessedLetters[guessedLetters.length-1]) || wrongGuessesCount == 0){
      m = ""
    }else{
      m = getFarewellText(languages[wrongGuessesCount-1].name)
    }
    return m
  }
  
  
  function handleGuess(letter){
    setGuessedLetters(prevGuessedLetters =>
      prevGuessedLetters.includes(letter)? 
        prevGuessedLetters :
        [...prevGuessedLetters, letter]
    )

  }

  //WORD SECTION
  const wordElement = currentWorld.split("").map((letter,index) =>{
    if(isGameLost && !guessedLetters.includes(letter)){
      return<span className='wrongLetter' key={index}>{letter.toUpperCase()}</span>
    }
    //Check if the letter is in the guessed letters array and in the current world,
    // If not, replace it with a space (" ")
    if(!guessedLetters.includes(letter)){
      letter = " "
    }
    
    return<span key={index}>{letter.toUpperCase()}</span>
  })
    
  //KEYBOARD BUTTONS GENERATOR
  const keyboard = alphabet.split("").map((letter) =>{
    const isGuessed = guessedLetters.includes(letter)
    const isCorrect = isGuessed && currentWorld.includes(letter)
    const isWrong = isGuessed && !currentWorld.includes(letter)
    const className = clsx({
      correct: isCorrect,
      wrong: isWrong
    })

    return (<button 
    disabled={isGameOver}  // Disable the button if the game is over
    onClick={()=>handleGuess(letter)} 
    key={letter}
    className={className}
    >{letter.toUpperCase()}</button>)
  })
  
  //COMPONENT
  return (
    <main>
      {isGameWon && <Confetti
        width={width}
        height={height}
      />}
      <header>
        <h1>Assembly: Endgame</h1>
        <p>Guess the word within 8 attempts to keep the programming world safe from Assembly!</p>
      </header>
      <section className={`game-status ${isGameOver ? (isGameWon ? 'game-won' : 'game-lost') : ''} ${message() ? 'farewell' : ''}`}>
        {isGameOver ? (
          isGameWon ? (
            <>
              <h2>You win!</h2>
              <p>Well done</p>
            </>
          ) : (
            <>
              <h2>Game Over!</h2>
              <p>Your better start learning assembly!</p>
            </>
          )
        ) : (
          <>
            <p className='msg-farewell'>{message()}</p>
          </>
          
        )}
      </section>
      
      {/* LANGUAGES */}
      <section className='languages'>
        <ul>
          {languages.map((language,index) =>{
            const addClass = index < wrongGuessesCount?
            'lost' : ''

            return <li 
            className={addClass}
            key={index} 
            style={{
              backgroundColor : language.backgroundColor,
              color : language.color
            }}>{language.name}</li>
          })}
        </ul>
        
      </section>

      <section className='word-section'>
        {wordElement}
      </section>

      <section className='keyboard-section'>
        {keyboard}
      </section>
      
      {isGameOver && 
      <div className='new-game-btn'>
          <button onClick={reset}>New game</button>
      </div>}
      
    </main>
  )
}

export default AssemblyGame
