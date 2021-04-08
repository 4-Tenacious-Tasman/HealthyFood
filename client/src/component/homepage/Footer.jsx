import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import styles from '../homepage/Homepage.module.css';

const Footer = () => {

  return (
    <footer className={styles.footerContainer}>
      <p>CA PRIVACY INFO</p>
      <p>CAREERS</p>
      <NavLink exact to='/marketplace'  style={{ color: "white", fontFamily: "sans-serif"}}>MARKETPLACE</NavLink>
      <p>CONTACT US</p>
      <p>ABOUT US</p>
      <p>HEALTHY FOOD INC 2021</p>
    </footer>

  )
}

export default Footer;