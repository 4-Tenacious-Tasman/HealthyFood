import React from 'react';
import styles from './Grocery.module.css'

const Grocery = ({grocery, addToCart}) => {

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={grocery.image}></img>
      </div>
      <button onClick={(e) => {addToCart(grocery)}} className={styles.button}>Add</button>
      <div className={styles.textContainer}>
        <div className={styles.name}>{grocery.name}</div>
        <div className={styles.cost}>${grocery.costvalue}</div>
      </div>
    </div>
  )
}

export default Grocery;