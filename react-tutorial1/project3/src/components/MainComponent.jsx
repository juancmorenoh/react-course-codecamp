
import { useState } from 'react'
import './MainComponent.css'
function Form() {
  const [ingredients, setIngredients] = useState([])


  function addIngredient(formData){
    const newIngredient = formData.get('ingredient')
    setIngredients((prevList) => [...prevList, newIngredient])
  }
  
  const handleOver = (e) => {
    e.target.style.backgroundColor = 'lightgray'
  }
  const handleOut = (e) => {
    e.target.style.backgroundColor = 'white'
  }
  

  return (
    <main>
      <form action={addIngredient}>
        <label htmlFor="add-ingredient"></label>
        <input onMouseOver={handleOver}
              onMouseOut={handleOut}
              type="text" 
              placeholder='e.g. oregano'
              name='ingredient' />
        <button>+ Add ingredient</button>
      </form>
      <div className='list'>
        <ul>
          {ingredients.map((ingredient,index) =>{
            return <li key={index}>{ingredient}</li>
          })}
        </ul>
      </div>
      
    </main>
    
  )
}

export default Form
