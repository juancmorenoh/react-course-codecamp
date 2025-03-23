import {useState, useEffect} from 'react'
import './Main.css'
import canvas from '../assets/canvas.png';

function Main() {
  const [memeList, setMemeList] = useState([])
  const [meme,setMeme] = useState({
    topText: 'One does not simply',
    bottomText: 'Walk into Mordor',
    image: null
  })

  function handleChange(e, element){
    const {value, name} = e.target
    console.log(value)
    setMeme(prevMeme => ({
      ...prevMeme, 
      [name]: value}))
  }

  const addImage = () =>{
    const randomNumber = Math.floor(Math.random() * memeList.length)
    setMeme(prevMeme => ({
      ...prevMeme,
      image: memeList[randomNumber].url
    }))
  }

  useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setMemeList(data.data.memes))
  },[])

  //This effect runs everytime MemeList changes, SO ONLY ONCE (When component mounts and get data from API), it will only run if memeList is populated
  useEffect(() => {
    if (memeList.length > 0) {
      addImage();
    }
  }, [memeList]);

  return (
    <main>
      <div className='forms-container'>
        <form>
          <label htmlFor="topText">Top Text</label>
          <input 
          id="topText" 
          type="text" 
          name="topText" 
          placeholder="One does not simply" 
          onChange={handleChange}
          value = {meme.topText}
          />
        </form>

        <form className='form-right'>
          <label htmlFor="bottomText">Bottom Text</label>
          <input 
          id="bottomText" 
          type="text" 
          name="bottomText" 
          placeholder="Walk into Mordor"
          onChange={handleChange}
          value = {meme.bottomText}
          />
          <button></button>
        </form>
      </div>
      <div className='btn-container'>
          <button onClick={addImage}>
            <p>Get a new meme image </p>
            <img src={canvas} alt="painting" />
          </button>
      </div>

      <div className='meme'>
        <img src={meme.image} alt="meme" />
        <span className='top'>{meme.topText}</span>
        <span className='bottom'>{meme.bottomText}</span>
      </div>
    </main>
  )
}

export default Main
