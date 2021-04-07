import React from 'react';
import styles from './AisleButton.module.css'

const AisleButton = (props) => {
  var aisleStyle = 'short';
  if (props.aisle.length > 12) {
    aisleStyle = 'long';
  }

  return (
    <div onClick={(e) => {props.selectAisle(props.aisle)}} className={styles[aisleStyle]}>
      {props.aisle}
    </div>
  )
}

export default AisleButton;