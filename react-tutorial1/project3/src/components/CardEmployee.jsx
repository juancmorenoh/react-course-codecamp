import {useState} from 'react'
import boy from './../assets/boy.png';
import empty from './../assets/starempty.png';
import full from './../assets/starfull.png';
import './PracticeComponent.css'

function CardEmployee(props) {
  const [star, setStar] = useState(props.element.isFavourite)
  
  function toggleStart(){
    setStar(star => {
      return!star;
    }); 
  }

  

  return (
    <div className='wrapper-component'>
      <div className='image-container'>
        <img src={boy} alt="boy" />

      </div>
      <div onClick={toggleStart} className='image-container star'>
        <img src={star ? (full):(empty)} alt="star" />
      </div>
      <div>
        <p>
        {props.element.firstName} {props.element.lastName}
        </p>
        <p>
        {props.element.phone}
        </p>
        <p>
        {props.element.email}
        </p>
        
      </div>

      <form>
        <label htmlFor="password1"></label>
        <input id="password1" type="password" placeholder='*****' name="password" />
      </form>
    </div>
  )
}

export default CardEmployee
