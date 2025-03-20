
import { useState } from 'react'
import './MainComponent.css'
import RecipeCode from './RecipeCode.jsx'

function MainComponent() {
  const [ingredients, setIngredients] = useState([])
  const [showRecipe, setShowRecipe] = useState(false)

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
      <div className='main-content-recipe'>
        {ingredients.length  > 0 ? (
           <>
            <h2>Ingredients on hand:</h2>
            <div className='list'>
              <ul>
                {ingredients.map((ingredient,index) =>{
                  return <li key={index}>{ingredient}</li>
                })}
              </ul>
            </div>
            {ingredients.length > 3 && 
              <div className='link-receipe-container'>
                <div className='left-cont'>
                  <h5>Ready for a recipe?</h5>
                  <p>Generate a recipe from your list of ingredients</p>
                </div>
                <button onClick={()=>setShowRecipe(!showRecipe)} className='recipe-btn'>Get Recipe</button>  
              </div>}
           </> 
          ): null} 
      </div>
      
      {showRecipe &&  <RecipeCode></RecipeCode>}
      
    </main>
    
  )
}

export default MainComponent
