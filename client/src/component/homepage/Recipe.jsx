import React from 'react';


function Recipe(props) {
  return (
    <div>
      {props.recipe.recipes ?
      <>
      <h2>{props.recipe.recipes[0].title}</h2>
      <a href={`${props.recipe.recipes[0].spoonacularSourceUrl}`}>Recipe Link Here!</a>
      <br />
      <br />
      <label>Summary:</label>
      <li>{props.recipe.recipes[0].summary.replace(/<\/?[^>]+(>|$)/g, "")}</li>
      <label>Instructions:</label>
      <li>{props.recipe.recipes[0].instructions.replace(/<\/?[^>]+(>|$)/g, "")}</li>
      </>
      :
      null}
    </div>
  )
}


export default Recipe;
