import React from 'react';

const AisleButton = (props) => {
  return (
    <div onClick={(e) => {props.selectAisle(props.aisle)}}>
      {props.aisle}
    </div>
  )
}

export default AisleButton;