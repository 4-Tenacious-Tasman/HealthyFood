import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import styles from './Homepage.module.css';

import Image from '../login/healthylogo.png';


const Navigation = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="header">
    <div className="header-left">
    <NavLink src={Logo} exact to='/' activeStyle={{fontWeight: "bold"}}> <img src={Image}></img></NavLink>
    <NavLink exact to='/marketplace' activeStyle={{fontWeight: "bold"}} style={{margin: "5px"}}>Marketplace</NavLink>
    <NavLink exact to='/RecipeGenerator' activeStyle={{fontWeight: "bold"}} style={{margin: "5px"}}>RecipeGenerator</NavLink>
    </div>
    <div className="header-right">
    <NavLink exact to='/login' activeStyle={{fontWeight: "bold"}} style={{margin: "5px"}}>{isAuthenticated ? 'Logout' : 'Login'}</NavLink>
    <NavLink exact to='/userprofile' activeStyle={{fontWeight: "bold"}} style={{margin: "5px"}}>Profile</NavLink>
    </div>
  </div>
  )
};

export default Navigation;