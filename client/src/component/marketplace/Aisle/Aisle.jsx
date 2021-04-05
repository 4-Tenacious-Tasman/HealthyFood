import React from 'react';
import Grocery from '../Grocery/Grocery.jsx'

const Aisle = (props) => {

  return (
    <div>
      {props.groceries.map((grocery , i) => {
        return (
          <Grocery grocery={grocery} key={i}/>
        )
      })}
    </div>
  )
}

export default Aisle;