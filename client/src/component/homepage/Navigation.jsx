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

        <div style={{height: "90px", width: "90px"}}>
        <NavLink src={Image} exact to='/' activeStyle={{fontWeight: "bold"}}> <img className={styles.imageHead} src={Image}></img></NavLink>
        </div>

        <NavLink exact to='/marketplace' activeStyle={{fontWeight: "bold"}} style={{margin: "25px", color: "white", fontFamily: "sans-serif"}}>MARKETPLACE</NavLink>
        <NavLink exact to='/RecipeGenerator' activeStyle={{fontWeight: "bold"}} style={{margin: "25px", color: "white", fontFamily: "sans-serif"}}>RECIPE GENERATOR</NavLink>
      </div>
    <div className={styles.rightHeader}>
    <NavLink exact to='/login' activeStyle={{fontWeight: "bold"}} style={{margin: "25px", color: "white", fontFamily: "sans-serif"}}>LOGIN</NavLink>
    <NavLink exact to='/userprofile' activeStyle={{fontWeight: "bold"}} style={{margin: "25px", color: "white", fontFamily: "sans-serif"}}>PROFILE</NavLink>
    </div>
  </div>
  )
};

export default Navigation;