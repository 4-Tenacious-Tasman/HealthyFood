import React from 'react';

const Grocery = ({grocery}) => {

  return (
    <div>
      <img src={grocery.image}></img>
      <button>Add</button>
      <div>{grocery.name}</div>
      <div>{grocery.costValue}</div>
      <div>{grocery.costUnit}</div>
    </div>
  )
}

export default Grocery;