import React from 'react';
import Main from './Main.jsx';
import { NavLink, Switch, Route } from 'react-router-dom';
import styles from './homepage/Homepage.module.css';
import Navigation from './homepage/Navigation.jsx';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return(
      <div className={styles.pageContainer}>
        <Main />
      </div>
    )
  }
}
export default App