require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const db = require("../database/index.js");
const axios = require('axios');
const ingredients = require('../database/data.js');

const baseUrl = 'https://api.spoonacular.com/food/ingredients/';
const apiKey = 'c43bfe0e07cd4dfa8ddd5cca3db5f520';

app.use(express.json());


app.get('/generateingredient', (req, res) => {
  var ingredientIDs = [
    5696,
    5165,
    11294,
    98961,
    11492,
    10011300,
    43155,
    23584,
    10011485,
    11001,
    10011457,
    1002028,
    23232,
    93695,
    10819297,
    10023618,
    11583,
    11641,
    9316,
    93640,
    12036,
    4584
  ];
  var data = [];
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
        console.log(data);
      })
      .catch(reject => {
        console.log(`failed to get ${id}`, reject);
      })
    })
    res.sendStatus(200);
  })

// console.log(ingredients);

app.get('/ingredient', (req, res) => {
  ingredients.forEach(ingredient => {
    db.query(`INSERT INTO ingredients (ingredients_id, name, costvalue, costunit, image, aisle, percentageprotein, percentagefat, percentagecarbs) VALUES ('${ingredient.ingredients_id}', '${ingredient.name}', ${ingredient.costValue}, '${ingredient.costUnit}', '${ingredient.image}', '${ingredient.aisle}', ${ingredient.percentageProtein}, ${ingredient.percentageFat}, ${ingredient.percentageCarbs});`, (err, data) => {
      if (err) {
        console.log(err, 'failed to insert data');
      } else {
        console.log(data, 'inserted successfully');
      }
    })
  })
  res.sendStatus(200);
})

  app.get('/test', (req,res)=>{
  db.query('insert into test (val) values ("it worked");', (err, data)=>{
    if(err){
      console.log(err)
    }else{
      db.query('select * from test;', (err, data)=>{
        if(err){
          console.log(err)
        }else{
          res.send(data)
        }
      })
     }
  })

})
app.use(express.static(path.join(__dirname, '../client/public')));

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});