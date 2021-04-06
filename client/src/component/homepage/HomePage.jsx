import React from 'react';
import styled from 'styled-components';
import HeroSection from './HeroSection.jsx';
import MissionSection from './MissionSection.jsx';
import { NavLink, Switch, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import Logo from "../../../public/images/HealthyFoodLogo.jpeg";



const Header = styled.div`
  display: flex;
  justify-content: space-between;
  position: static;
`;

const LeftHeader = styled.div`
  justify-content: flex-start;
`;

const RightHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;


const ImageHead = styled.img`
  height: 100px;
`;

const Button = styled.button`
  height: 30px;
  margin: auto;
  margin-left: 5px;
  border-radius: 15px;
  background: salmon;

  &:hover{
    background-color: grey;
    transition: all ease 0.5s;
  }
`;

// const ButtonRoute = styled.button`
//   background: transparent;
//   border: none;
//   outline: none;
//   cursor: pointer;

//   &:hover {
//     font-weight: bold;
//   }
// `;


// const Box = styled.div`
//   border: 5px solid black;
//   border-radius: 15px;
//   height: 80px;
//   width: 125px;
//   justify-Content: "flex-start";
// `;


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Header className="header">

          <LeftHeader className="header-left">
          <NavLink src={Logo} exact to='/' activeStyle={{fontWeight: "bold"}}> <ImageHead src={Logo}></ImageHead></NavLink>
          <NavLink exact to='/marketplace' activeStyle={{fontWeight: "bold"}} style={{margin: "5px"}}>Marketplace</NavLink>
          <NavLink exact to='/RecipeGenerator' activeStyle={{fontWeight: "bold"}} style={{margin: "5px"}}>RecipeGenerator</NavLink>

          </LeftHeader>

          <RightHeader className="header-right">
          <NavLink exact to='/userprofile' activeStyle={{fontWeight: "bold"}}><Button>Login/Signup</Button></NavLink>

          </RightHeader>

        </Header>

        <div className="mission/values">
          <MissionSection />
        </div>

        <div className="hero-section">
        <HeroSection/>
        </div>

        <div className="description page" style={{display: "flex"}}>

          <div className="photo + create meal plan desc">
              <img></img>
              <div>
                <h2></h2>
                <p></p>
              </div>
          </div>

          <div className="create recipe + image">
              <div>
                <h2></h2>
                <p></p>
              </div>
              <img></img>
          </div>

          <div className="photo + sustainability desc">
            <img></img>
              <div>
                <h2></h2>
                <p></p>
              </div>
          </div>

        </div>

        <footer style={{backgroundColor: "#2da77d", display: "flex", justifyContent: "space-evenly", height: "50px"}}>
            <p>CA privacy info</p>
            <p>Careers</p>
            <p>FAQ</p>
            <p>contact us</p>
            <p>about us</p>
            <p>HealthyFood LLC 2021</p>
        </footer>



      </div>
    )
  }
}

export default HomePage;