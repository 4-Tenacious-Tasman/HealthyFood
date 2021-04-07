import React from 'react';
import Main from './Main.jsx';
import { NavLink, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Logo from "../../public/images/HealthyFoodLogo.jpeg";
import Navigation from './homepage/Navigation.jsx';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return(
      <div className='app-container'>
        <Main />

        <footer style={{backgroundColor: "#2da77d", display: "flex", justifyContent: "space-evenly", height: "50px", position: "fixed", width: "100%", left: "0", bottom: "0"}}>
            <p>CA privacy info</p>
            <p>Careers</p>
            <p>FAQ</p>
            <p>Contact us</p>
            <p>About us</p>
            <p>HealthyFood inc 2021</p>
        </footer>

      </div>
    )
  }
}
export default App