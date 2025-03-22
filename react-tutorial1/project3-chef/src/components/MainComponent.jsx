
import { useState } from 'react'
import './MainComponent.css'
import RecipeCode from './RecipeCode.jsx'
import RecipeList from './RecipeList.jsx'
import { getRecipeFromMistral } from '../../api.js';

function MainComponent() {
  const [ingredients, setIngredients] = useState([])
  const [recipe, setRecipe] = useState("")

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
  
  async function getRecipe(){
    const recipeMarkdown = await getRecipeFromMistral(ingredients) 
    setRecipe(recipeMarkdown)
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
           <RecipeList ingredients={ingredients} getRecipe={getRecipe}></RecipeList> 
          ): null} 
      </div>
      
      {recipe &&  <RecipeCode recipe={recipe}></RecipeCode>}
      
    </main>
    
  )
}

export default MainComponent
