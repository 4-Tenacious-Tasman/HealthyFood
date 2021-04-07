import React from "react";
import axios from 'axios';
import Recipe from './Recipe.jsx';
import styles from './Homepage.module.css';


class RecipeGen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cuisune: '',
      diet: '',
      time: '',
      sent: 0,
      currentRecipe: [],
      showRecipe: false,
    };
    this.getRecipe = this.getRecipe.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getRecipe() {
    const diet = this.state.diet !== '' ? this.state.diet : null;
    const cuisune = this.state.cuisune !== '' ? this.state.cuisune : null;
    const time = this.state.time !== '' ? this.state.cuisune : null;
    if(this.state.sent < 5 && this.state.cuisune !== "" && this.state.diet !== "" && this.state.time !== "") {
    axios.get(`https://api.spoonacular.com/recipes/random?number=1&tags=${cuisune},${diet},${time}&apiKey=46a2c8efa3664777a9f310510cfe7477`)
    .then(response => {
      console.log(response.data)
        this.setState({
          sent: this.state.sent + 1,
          currentRecipe: response.data,
          showRecipe: true,
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
      <div style={{display: "flex", flexDirection: "column"}}>
          <div className={styles.recipeOptions}>
            <label>Choose your Recipe options:</label>
            <br />
            <label>Cuisune: </label>
            <select name="cuisune" value={this.state.cuisune} onChange={this.handleChange}>
              <option defaultValue hidden>Choose here</option>
              <option value="">None</option>
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
              <option value="mexican" >Mexican</option>
              <option value="middleEastern">Middle Eastern</option>
              <option value="southern">Southern</option>
              <option value="spanish">Spanish</option>
              <option value="thai">Thai</option>
              <option value="vietnamese">Vietnamese</option>
            </select>

            <br />
            <label>Diet: </label>
            <select name="diet" value={this.state.diet} onChange={this.handleChange}>
              <option defaultValue hidden>Choose here</option>
              <option value="">None</option>
              <option value="gluten free">Gluten Free</option>
              <option value="ketogenic">Ketogenic</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="lacto-Vegetarian">Lacto-Vegetarian</option>
              <option value="ovo-Vegetarian">Ovo-Vegetarian</option>
              <option value="vegan">Vegan</option>
              <option value="pescetarian">Pescetarian</option>
              <option value="paleolithic" >Paleo</option>
              <option value="primal">Primal</option>
              <option value="whole30">Whole30</option>
            </select>
            <br />
            <label>Meal time: </label>
            <select name="time" value={this.state.time} onChange={this.handleChange}>
              <option defaultValue hidden>Choose here</option>
              <option value="">None</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="dessert">Dessert</option>
            </select>


            <button className={styles.recipeButton} onClick={this.getRecipe}>Get Recipe</button>

          </div>
            {this.state ? (<Recipe recipe={this.state.currentRecipe}  />): null
            }


      </div>
    );
  }
}

export default RecipeGen;
