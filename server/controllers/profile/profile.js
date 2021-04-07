const express = require('express');
const axios = require('axios')
const db = require('../../../database/index.js');
const { mealPlan, apiKey } = require('../../config.js');

module.exports = {
  user: (req, res) => {
    const { id } = req.query;
    db.query('SELECT * FROM users WHERE id = $1', [id])
    .then(result => {
      res.json(result.rows[0]);
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
        meals.forEach((meal, index) => {
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
              console.log(data.rows);
            })
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
  updatePreferences: (req, res) => {
    const { id, first_name, last_name, age, target_calories, diet, exclude } = req.body;
    console.log(req.body);
    db.query('UPDATE users SET first_name = $1, last_name = $2, age = $3, target_calories = $4, diet = $5, exclude = $6 WHERE id = $7 RETURNING *;', [first_name, last_name, age, target_calories, diet, exclude, id])
      .then(data => {
        res.json(data.rows[0]);
      })
      .catch(err => {
        res.send(err);
      });
  },
  userPlans: (req, res) => {
    const { id } = req.query;
    console.log(req.query);
    db.query('SELECT * FROM daily_meal_plans WHERE user_id = $1;', [id])
      .then(data => {
        res.json(data.rows);
      })
      .catch(err => {
        res.send(err);
      });
  },
  changePlan: (req, res) => {
    const { date, id } = req.body;
    db.query('SELECT id FROM daily_meal_plans WHERE date IN ($1) AND id = $2;', [date, id])
      .then(result => {
        res.json(result.rows);
      })
      .catch(err => {
        res.json(err);
      });
    // const timeFrame = 'day';
    // axios.get(`${mealPlan}`, {
    //   params: {
    //     apiKey,
    //     timeFrame,
    //     targetCalories,
    //     diet,
    //     exclude
    //   }
    // })
    //   .then(result => {
    //     const { meals, nutrients } = result.data;
    //     let breakfast, lunch, dinner;
    //     meals.forEach((meal, index) => {
    //       if (index === 0) {
    //         breakfast = meal;
    //       } else if (index === 1) {
    //         lunch = meal;
    //       } else {
    //         dinner = meal;
    //       }
    //     });
    //     db.query('UPDATE daily_meal_plans SET breakfast = $1, lunch = $2, dinner = $3, nutrients = $4 WHERE meal_id = $5) RETURNING *;', [id, breakfast, lunch, dinner, nutrients])
    //       .then(data => {
    //         res.json(data.rows[0]);
    //       });
    //   })
    //   .catch(() => {
    //     res.sendStatus(400);
    //   });
  }
}
