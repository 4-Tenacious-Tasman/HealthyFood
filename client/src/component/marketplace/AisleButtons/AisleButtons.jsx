import React from 'react';
import AisleButton from '../AisleButton/AisleButton.jsx'
import styles from './AisleButtons.module.css'

const AisleButtons = (props) => {

  var aisles = ['Meat', 'Milk, Eggs, Other Dairy', 'Bakery/Bread', 'Spices and Seasonings','Produce',  'Nuts', 'Cheese', 'Dried Fruits', 'Nut butters, Jams, and Honey', 'Canned and Jarred'];

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