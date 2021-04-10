const express = require('express');
const axios = require('axios')
const db = require('../../../database/index.js');
const { mealPlan, apiKey, recipes } = require('../../config.js');

module.exports = {
  userPlans: (req, res) => {
    const { id } = req.query;
    db.query('SELECT * FROM daily_meal_plans WHERE user_id = $1;', [id])
      .then(data => {
        res.json(data.rows);
      })
      .catch(err => {
        res.send(err);
      });
  },
  userDetails: (req, res) => {
    const { email } = req.query;
    db.query('SELECT * FROM users WHERE email IN ($1)', [email])
      .then(result => {
        if (!result.rows.length > 0) {
          db.query('INSERT INTO users(email) VALUES($1) RETURNING *;', [email])
            .then(userDetails => {
              res.json(userDetails.rows[0]);
            })
        } else {
          res.json(result.rows[0]);
        }
      })
      .catch(err => {
        res.send(err);
      })
  },
  newPlan: (req, res) => {
    const { date, id, target_calories, diet, exclude } = req.body;
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
        meals.forEach(async (meal, index) => {
          if (index === 0) {
            breakfast = meal;
          } else if (index === 1) {
            lunch = meal;
          } else {
            dinner = meal;
          }
        });
        db.query('INSERT INTO daily_meal_plans(user_id, date, breakfast, lunch, dinner, nutrients) VALUES ($1, $2, $3, $4, $5, $6);', [id, date, breakfast, lunch, dinner, nutrients])
          .then(() => {
            db.query('SELECT * FROM daily_meal_plans WHERE user_id = $1;', [id])
              .then(data => {
                res.status(200).json(data.rows);
              })
          });
      })
      .catch(() => {
        res.sendStatus(400);
      });
  },
  changePlan: (req, res) => {
    const { meal_id, id, target_calories, diet, exclude } = req.body;
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
        meals.forEach(async (meal, index) => {
          if (index === 0) {
            breakfast = meal;
          } else if (index === 1) {
            lunch = meal;
          } else {
            dinner = meal;
          }
        });

        db.query('UPDATE daily_meal_plans SET breakfast = $1, lunch = $2, dinner = $3, nutrients = $4 WHERE id = $5;', [breakfast, lunch, dinner, nutrients, meal_id])
          .then(() => {
            db.query('SELECT * FROM daily_meal_plans WHERE user_id = $1;', [id])
              .then(data => {
                res.status(200).json(data.rows);
              })
          });
      })
      .catch(() => {
        res.sendStatus(400);
      });
  },
  updatePreferences: (req, res) => {
    const { id, first_name, last_name, age, target_calories, diet, exclude } = req.body;
    db.query('UPDATE users SET first_name = $1, last_name = $2, age = $3, target_calories = $4, diet = $5, exclude = $6 WHERE id = $7 RETURNING *;', [first_name, last_name, age, target_calories, diet, exclude, id])
      .then(data => {
        res.json(data.rows[0]);
      })
      .catch(err => {
        res.send(err);
      });
  },
  updateSubscription: (req, res) => {
    const { subscribed, id } = req.body;
    db.query('UPDATE users SET subscribed = $1 WHERE id = $2 RETURNING *;', [subscribed, id])
      .then(result => {
        res.json(result.rows);
      })
      .catch(err => {
        res.json(err);
      })
  }
}
