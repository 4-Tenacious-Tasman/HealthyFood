import React from 'react';
import styled from 'styled-components';
import HeroSection from './HeroSection.jsx';
import MissionSection from './MissionSection.jsx';
import { NavLink, Switch, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import Logo from "../../../public/images/HealthyFoodLogo.jpeg";
import Sustain from "../../../public/images/earth.png";
import MealPrep from "../../../public/images/mealpreplogo.png";
import Recipe from "../../../public/images/recipelogo.png";



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
  border-radius: 5px;
  background: orange;

  &:hover{
    background-color: grey;
    transition: all ease 0.5s;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 500px;
  margin: 0 auto;
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
          <NavLink exact to='/login' activeStyle={{fontWeight: "bold"}}>Login</NavLink>
          <NavLink exact to='/userprofile' activeStyle={{fontWeight: "bold"}}>Profile</NavLink>
          </RightHeader>

        </Header>

        <div className="mission/values">
          <MissionSection />
        </div>

        <div className="description page" style={{display: "flex", flexDirection: "column", width: "100%"}}>

            <Container className="photo + create meal plan desc">
                <img src={MealPrep}></img>
                <div>
                  <h2>Customized Meal Plans</h2>
                  <p>We make customized meal plans compiled by your preferences of diet and nutritional needs.</p>
                </div>
            </Container>

            <Container className="create recipe + image">
                <div>
                  <h2>Recipe Generator</h2>
                  <p>We love spontaneity, and what better way to do something new then by using our recipe generator to make a meal for anytime of the day.</p>
                </div>
                <img src={Recipe}></img>
            </Container>

            <Container className="photo + sustainability desc">
              <img src={Sustain} style={{width: "400px"}}></img>
                <div>
                  <h2>Sustainability for All</h2>
                  <p>We are a homegrown company that runs on taking care of our customers, our local farms and most important, our planet.</p>
                </div>
            </Container>

            </div>

        <div className="hero-section" style={{paddingBottom: "100px"}}>
        <HeroSection/>
        </div>

        <footer style={{backgroundColor: "#2da77d", display: "flex", justifyContent: "space-evenly", height: "50px", position: "fixed", width: "100%", left: "0", bottom: "0"}}>
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