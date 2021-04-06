import React from 'react';
import axios from 'axios';
const baseUrl = 'https://api.spoonacular.com/food/ingredients/';
const apiKey = '3ea26b4a517a4e16804094d1a3acf298';

class FarmersMarket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
      queries: []
    }
  }

componentDidMount() {
  var ingredientIDs = [
    4513,
    // 5696,
    // 5165,
    // 11294,
    // 98961,
    // 11492,
    // 10011300,
    // 43155,
    // 23584,
    // 10011485,
    // 11001,
    // 10011457,
    // 1002028,
    // 23232,
    // 93695,
    // 10819297,
    // 10023618,
    // 11583,
    // 11641,
    // 9316,
    // 93640,
    // 12036,
    // 4584,
    // 11886,
    // 11954,
    // 11945,
    // 2041,
    // 11507,
    // 1040,
    // 11147,
    // 10310123,
    // 1029003,
    // 1012044,
    // 11670,
    // 11485,
    // 13523,
    // 11887,
    // 6159,
    // 11529,
    // 11547,
    // 11549,
    // 23636,
    // 2043,
    // 1119,
    // 7955,
    // 12117,
    // 9019,
    // 10130,
    // 11564,
    // 1145,
    // 11109,
    // 43015,
    // 10011693,
    // 16034,
    // 16018,
    // 11531,
    // 16058,
    // 11124,
    // 2053,
    // 11143,
    // 11135,
    // 14106,
    // 1009,
    // 9070,
    // 9181,
    // 1001053,
    // 12155,
    // 9326,
    // 1054,
    // 42135,
    // 1012069,
    // 10611282,
    // 1011009,
    // 2032,
    // 10211362,
    // 11951,
    // 1002068,
    // 10511282,
    // 10311529,
    // 10111485,
    // 1002001,
    // 14084,
    // 5091,
    // 5006,
    // 11165,
    // 9081,
    // 1011,
    // 10118192,
    // 11168,
    // 18023,
    // 5307,
    // 1001019,
    // 10116098,
    // 11206,
    // 9085,
    // 9087,
    // 9032,
    // 9079,
    // 11955,
    // 11209,
    // 23657,
    // 2064,
    // 1089003,
    // 9112,
    // 2001,
    // 1012010,
    // 1002014,
    // 12120,
    // 11979,
    // 11603,
    // 9421,
    // 1052034,
    // 10011821,
    // 1005091,
    // 12142,
    // 1038,
    // 16223,
    // 23625,
    // 1025,
    // 5096,
    // 1001009,
    // 1012068,
    // 11238,
    // 1045026,
    // 1251,
    // 10120052,
    // 1001026,
    // 1011026,
    // 11300,
    // 1011019,
    // 9277,
    // 7059,
    // 11422,
    // 9299,
    // 12023,
    // 10013149,
    // 93818,
    // 10211529,
    // 4639,
    // 12087,
    // 10111251,
    // 1032053,
    // 11821,
    // 19296,
    // 1079003,
    // 4058,
    // 93761,
    // 1022053
  ];
  var data = [];
  var queries = [];
  ingredientIDs.forEach(id => {
    var ingredient = {};
    axios.get(`${baseUrl}${id}/information?amount=1&apiKey=${apiKey}`)
      .then(response => {
        console.log('then');
        var facts = response.data;
        ingredient.ingredients_id = facts.id;
        ingredient.name = facts.originalName;
        ingredient.costValue = facts.estimatedCost.value || null;
        ingredient.costUnit = facts.estimatedCost.unit || null;
        ingredient.image = `https://spoonacular.com/cdn/ingredients_250x250/${facts.image}`;
        ingredient.aisle = facts.aisle || null;
        ingredient.percentageProtein = facts.nutrition.caloricBreakdown.percentProtein || 0;
        ingredient.percentageFat = facts.nutrition.caloricBreakdown.percentFat || 0;
        ingredient.percentageCarbs = facts.nutrition.caloricBreakdown.percentCarbs || 0;
        data.push(ingredient);
        queries.push(`INSERT INTO ingredients (ingredients_id, name, costvalue, costunit, image, aisle, percentageprotein, percentagefat, percentagecarbs) VALUES ('${facts.id}', '${facts.originalName}', '${facts.estimatedCost.value}', '${facts.estimatedCost.unit}', 'https://spoonacular.com/cdn/ingredients_250x250/${facts.image}', '${facts.aisle}', '${facts.nutrition.caloricBreakdown.percentProtein}', '${facts.nutrition.caloricBreakdown.percentFat}', '${facts.nutrition.caloricBreakdown.percentCarbs}')`)
      })
      .catch(reject => {
        console.log(reject)
      })
      this.setState({
        ingredients: data,
        queries: queries
      });
      console.log(this.state.ingredients, this.state.queries);
  })
}

  render() {
    return (
      <div>
        {this.state.ingredients}<br/>
        {this.state.queries}
      </div>
    )
  }
}

export default FarmersMarket;