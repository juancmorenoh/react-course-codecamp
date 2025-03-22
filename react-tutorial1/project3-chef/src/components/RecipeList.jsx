import React from 'react'

function RecipeList(props) {
  // getRecipeFromMistral
  //api state should live here 
  //when get recipe click, it generates it, and pass it to c
  return (
    <>
      <h2>Ingredients on hand:</h2>
      <div className='list'>
        <ul>
          {props.ingredients.map((ingredient,index) =>{
            return <li key={index}>{ingredient}</li>
          })} 
        </ul>
      </div>
      {props.ingredients.length > 3 && 
        <div className='link-receipe-container'>
          <div className='left-cont'>
            <h5>Ready for a recipe?</h5>
            <p>Generate a recipe from your list of ingredients</p>
          </div>
          <button onClick={props.getRecipe} className='recipe-btn'>Get Recipe</button>  
        </div>}
    </>  
  )
}

export default RecipeList
