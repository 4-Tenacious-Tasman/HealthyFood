const express = require('express');
const axios = require('axios')
const db = require('../../../database/index.js');
const { mealPlan, apiKey } = require('../../config.js');

module.exports = {
  generatePlan: (req, res) => {
    db.query('SELECT * FROM users WHERE id = 3;')
      .then(data => {
        const { id, target_calories, diet, exclude } = data.rows[0];
        const timeFrame = 'day';
        const targetCalories = target_calories;
        axios.get(`${mealPlan}`, {
          params: {
            apiKey,
            timeFrame,
            targetCalories,
            diet,
            exclude
          }
        })
          .then(result => {
            const { meals, nutrients } = result.data;
            let breakfast, lunch, dinner;
            meals.forEach((meal, index) => {
              if (index === 0) {
                breakfast = meal;
              } else if (index === 1) {
                lunch = meal;
              } else {
                dinner = meal;
              }
            });

            db.query('INSERT INTO daily_meal_plans(user_id, breakfast, lunch, dinner, nutrients) VALUES ($1, $2, $3, $4, $5) RETURNING *;', [id, breakfast, lunch, dinner, nutrients])
              .then(data => {
                res.json(data.rows[0]);
              });
          });
      })
      .catch(() => {
        res.sendStatus(400);
      });
  },
  signup: (req, res) => {
    const { first_name, last_name, email, age, target_calories, diet, exclude } = req.body;
    db.query('INSERT INTO users(first_name, last_name, email, age, target_calories, diet, exclude) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *;', [first_name, last_name, email, age, target_calories, diet, exclude])
    .then(data => {
      res.json(data.rows);
    })
    .catch(err => {
      res.send(err);
    });
  },
  updatePreferences:(req, res) => {
    const { id, first_name, last_name, email, age, target_calories, diet, exclude } = req.body;
    db.query('UPDATE users SET first_name = $1, last_name = $2, email = $3, age = $4, target_calories = $5, diet = $6, exclude = $7 WHERE id = $8 RETURNING *;', [first_name, last_name, email, age, target_calories, diet, exclude, id])
    .then(data => {
      res.json(data.rows);
    })
    .catch(err => {
      res.send(err);
    });
  }
}