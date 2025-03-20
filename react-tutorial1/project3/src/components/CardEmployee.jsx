import {useState} from 'react'
import boy from './../assets/boy.png';

import Star from './Star';
import './PracticeComponent.css'

function CardEmployee(props) {
  const [star, setStar] = useState(props.element.isFavourite)
  function toggleStart(){
    setStar(star => !star); 
  }

  

  return (
    <div className='wrapper-component'>
      <div className='image-container'>
        <img src={boy} alt="boy" />
      </div>
        <Star isFilled={star} handleClick={toggleStart}></Star>
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
        <label htmlFor="password"></label>
        <input id="password" type="password" placeholder='*****' name="password" />
      </form>
    </div>
  )
}

export default CardEmployee
