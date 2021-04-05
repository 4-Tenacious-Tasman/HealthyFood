import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink exact to='/' activeStyle={{fontWeight: "bold"}}>Home</NavLink></li>
      <li><NavLink exact to='/marketplace' activeStyle={{fontWeight: "bold"}}>Marketplace</NavLink></li>
      <li><NavLink exact to='/userprofile' activeStyle={{fontWeight: "bold"}}>Profile</NavLink></li>
    </ul>
  </nav>
);

export default Navigation;