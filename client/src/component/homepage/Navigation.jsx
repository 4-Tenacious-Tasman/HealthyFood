import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import styles from './Homepage.module.css';

import Image from '../login/healthylogo.png';


const Navigation = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div className={styles.headerContainer}>
      <div className={styles.leftHeader}>
        <NavLink src={Image} exact to='/' activeStyle={{fontWeight: "bold"}}> <img className={styles.imageHead} src={Image}></img></NavLink>
        <NavLink exact to='/marketplace' activeStyle={{fontWeight: "bold"}} style={{margin: "5px", color: "white"}}>Marketplace</NavLink>
        <NavLink exact to='/RecipeGenerator' activeStyle={{fontWeight: "bold"}} style={{margin: "5px", color: "white"}}>RecipeGenerator</NavLink>
      </div>
    <div className={styles.rightHeader}>
    <NavLink exact to='/UserProfileA'activeStyle={{fontWeight: "bold"}} style={{margin: "5px", color: "white"}}>Bypass Authentication</NavLink>
    <NavLink exact to='/login' activeStyle={{fontWeight: "bold"}} style={{margin: "5px", color: "white"}}>Login</NavLink>
    <NavLink exact to='/userprofile' activeStyle={{fontWeight: "bold"}} style={{margin: "5px", color: "white"}}>Profile</NavLink>
    </div>
  </div>
  )
};

export default Navigation;