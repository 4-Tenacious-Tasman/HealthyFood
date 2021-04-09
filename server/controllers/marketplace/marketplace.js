const express = require('express');
const axios = require('axios')
const db = require('../../../database/index.js');

module.exports = {
  getAllIngredients: (req, res) => {
    db.query(`SELECT * FROM ingredients`)
      .then(data => {
        let ingredients = data.rows;
          ingredients.forEach(ingredient => {
            if (ingredient.costvalue === 0) {
              ingredient.costvalue = 1;
              ingredient.costvalue = ingredient.costvalue.toFixed(2);
            } else {
              ingredient.costvalue = (ingredient.costvalue/100).toFixed(2);
            }
            var name = ingredient.name.split(' ');
            name = name.map((word) => {
              return word[0].toUpperCase() + word.substring(1)
            })
            ingredient.name = name.join(' ');
        })
        res.send(ingredients);
      })
      .catch(reject => {
        res.status(502).send('Failed to retrieve ingredients from database,', reject);
      })
  }
}