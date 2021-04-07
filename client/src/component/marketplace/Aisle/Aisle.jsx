import React from 'react';
import Grocery from '../Grocery/Grocery.jsx'
import styles from './Aisle.module.css'

const Aisle = (props) => {

  return (
    <div className={styles.container}>
      {props.groceries.map((grocery , i) => {
        return (
          <Grocery grocery={grocery} addToCart={props.addToCart} key={i}/>
        )
      })}
    </div>
  )
}

export default Aisle;