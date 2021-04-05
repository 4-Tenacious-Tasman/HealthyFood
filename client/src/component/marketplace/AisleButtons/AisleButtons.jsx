import React from 'react';
import AisleButton from '../AisleButton/AisleButton.jsx'
import styles from './AisleButtons.module.css'

const AisleButtons = (props) => {

  var aisles = [
    'Meat',
    'Bakery/Bread',
    'Produce',
    'Spices and Seasonings',
    'Canned and Jarred',
    'Nut butters, Jams, and Honey',
    'Milk, Eggs, Other Dairy',
    'Nuts',
    'Cheese',
    'Dried Fruits']

  return (
    <div className={styles.container}>
      {aisles.map((aisle , i) => {
        return (
          <AisleButton aisle={aisle} selectAisle={props.selectAisle} key={i}/>
        )
      })}
    </div>
  )
}

export default AisleButtons;