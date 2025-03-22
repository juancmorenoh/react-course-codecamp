import Markdown from 'react-markdown'

function RecipeCode(props) {
  return(
    <section className='suggested-recipe-container'>
      <h2>Chef reccomends:</h2>
      <Markdown>{props.recipe}</Markdown>
    </section>
  )
}

export default RecipeCode

