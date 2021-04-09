import React from 'react';
import styles from './Homepage.module.css';

function Recipe(props) {
  return (
    <div className={styles.newRecipe}>
      {props.recipe.recipes ?
      <>
      <h2>{props.recipe.recipes[0].title}</h2>
      <a target="_blank" href={`${props.recipe.recipes[0].spoonacularSourceUrl}`}>Recipe Link Here!</a>
      <br />
      <label className={styles.labels}>Summary:</label>
      <p style={{textAlign: "left"}}>{props.recipe.recipes[0].summary.replace(/<\/?[^>]+(>|$)/g, "")}</p>
      <br />
      <label className={styles.labels}>Instructions:</label>
      <p style={{textAlign: "left"}}>{props.recipe.recipes[0].instructions.replace(/<\/?[^>]+(>|$)/g, "")}</p>
      </>
      :
      null}
    </div>
  )
}


export default Recipe;
