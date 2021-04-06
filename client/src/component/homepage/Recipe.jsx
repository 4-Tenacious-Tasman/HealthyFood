import React from 'react';


function Recipe(props) {

  return (
    <div>
      <h2>Here is your random recipe!</h2>
      {props.recipe.recipes ?
      <>
      <li>{props.recipe.recipes[0].title}</li>
      <li> <p>{props.recipe.recipes[0].spoonacularSourceUrl}</p></li>
      <li>{props.recipe.recipes[0].summary}</li>
      <li>{props.recipe.recipes[0].instructions}</li>
      </>
      :
      null}
    </div>
  )
}


export default Recipe;
