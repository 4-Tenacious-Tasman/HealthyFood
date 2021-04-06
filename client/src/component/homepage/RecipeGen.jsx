import React from "react";
import styled from 'styled-components';
import { NavLink, Switch, Route } from 'react-router-dom';
import Logo from "../../../public/images/HealthyFoodLogo.jpeg";
import axios from 'axios';
import Recipe from './Recipe.jsx';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  position: static;
`;

const ImageHead = styled.img`
  height: 100px;
`;

const LeftHeader = styled.div`
  justify-content: flex-start;
`;

const RightHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
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

const Box = styled.div`
  border: 5px solid lightgreen;
  border-radius: 15px;
  height: 200px;
  width: 250px;
  justify-Content: flex-start;
  flex-direction: column;
`;

class RecipeGen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cuisune: '',
      diet: '',
      time: '',
      sent: 0,
      currentRecipe: [],
    };
    this.getRecipe = this.getRecipe.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getRecipe() {
    const diet = this.state.diet !== '' ? this.state.diet : null;
    const cuisune = this.state.cuisune !== '' ? this.state.cuisune : null;
    const time = this.state.time !== '' ? this.state.cuisune : null;
    console.log(diet, cuisune)
    if(this.state.sent < 5 ) {
    axios.get(`https://api.spoonacular.com/recipes/random?number=1&tags=${cuisune},${diet},${time}&apiKey=46a2c8efa3664777a9f310510cfe7477`)
    .then(response => {
      console.log(response.data);
      this.setState({
        sent: this.state.sent + 1,
        currentRecipe: response.data
      })
    })
    .catch(err => {
      console.log(err);
    })
    }

  }

  handleChange(e) {
    e.preventDefault();
    var key = e.target.name;
    this.setState({
      [key]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Header className="header">
          <LeftHeader className="header-left">
            <NavLink
              src={Logo}
              exact
              to="/"
              activeStyle={{ fontWeight: "bold" }}
            >
              {" "}
              <ImageHead src={Logo}></ImageHead>
            </NavLink>
            <NavLink
              exact
              to="/marketplace"
              activeStyle={{ fontWeight: "bold" }}
              style={{margin: "5px"}}
            >
              Marketplace
            </NavLink>
            <NavLink
              exact
              to="/RecipeGenerator"
              activeStyle={{ fontWeight: "bold"}}
              style={{margin: "5px"}}
            >
              RecipeGenerator
            </NavLink>
          </LeftHeader>

          <RightHeader className="header-right">
            <NavLink
              exact
              to="/userprofile"
              activeStyle={{ fontWeight: "bold" }}
            >
              <Button>Login/Signup</Button>
            </NavLink>
          </RightHeader>
        </Header>




          <Box>
            <label>Choose your Recipe options:</label>
            <select name="cuisune" value={this.state.cuisune} onChange={this.handleChange}>
              <option value="african">African</option>
              <option value="american">American</option>
              <option value="british">British</option>
              <option value="cajun" >Cajun</option>
              <option value="caribbean">Caribbean</option>
              <option value="chinese">Chinese</option>
              <option value="european">European</option>
              <option value="french">French</option>
              <option value="german">German</option>
              <option value="greek">Greek</option>
              <option value="indian">Indian</option>
              <option value="irish">Irish</option>
              <option value="italian">Italian</option>
              <option value="japanese">Japanese</option>
              <option value="jewish">Jewish</option>
              <option value="korean">Korean</option>
              <option value="latin American">Latin American</option>
              <option value="mediterranean">Mediterranean</option>
              <option value="mexican">Mexican</option>
              <option value="middleEastern">Middle Eastern</option>
              <option value="nordic">Nordic</option>
              <option value="southern">Southern</option>
              <option value="spanish">Spanish</option>
              <option value="thai">Thai</option>
              <option value="vietnamese">Vietnamese</option>
            </select>

            <select name="diet" value={this.state.diet} onChange={this.handleChange}>
              <option value="gluten Free">Gluten Free</option>
              <option value="ketogenic">Ketogenic</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="lacto-Vegetarian">Lacto-Vegetarian</option>
              <option value="ovo-Vegetarian">Ovo-Vegetarian</option>
              <option value="vegan">Vegan</option>
              <option value="pescetarian">Pescetarian</option>
              <option value="paleo">Paleo</option>
              <option value="primal">Primal</option>
              <option value="whole30">Whole30</option>
            </select>

            <select name="time" value={this.state.time} onChange={this.handleChange}>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="dessert">Dessert</option>
            </select>

            <button onClick={this.getRecipe}>Get Recipe</button>
          </Box>

          <Recipe recipe={this.state.currentRecipe} style={{display: "flex", flexDirection: "column"}} />

      </div>
    );
  }
}

export default RecipeGen;
