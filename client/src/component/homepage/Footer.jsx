import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import styles from '../homepage/Homepage.module.css';

const Footer = () => {

  return (
    <footer className={styles.footerContainer}>
      <p>CA privacy info</p>
      <p>Careers</p>
      <NavLink exact to='/marketplace'  style={{ color: "white", fontFamily: "sans-serif"}}>Marketplace</NavLink>
      <p>Contact us</p>
      <p>About us</p>
      <p>HealthyFood Inc 2021</p>
    </footer>

  )
}

export default Footer;