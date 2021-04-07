import React from 'react';
import styles from './Grocery.module.css'

const Grocery = ({grocery, addToCart}) => {

  return (
    <div className={styles.container}>
      <img src={grocery.image}></img>
      <button onClick={(e) => {addToCart(grocery)}} className={styles.button}>Add</button>
      <div className={styles.textContainer}>
        <div className={styles.name}>{grocery.name}</div>
          <div className={styles.cost}>${grocery.costValue}</div>
      </div>
    </div>
  )
}

export default Grocery;