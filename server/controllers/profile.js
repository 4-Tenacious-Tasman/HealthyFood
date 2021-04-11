const express = require('express');
const axios = require('axios')
const {
  userPlans,
  userDetails,
  newPlan,
  changePlan,
  updatePreferences,
  updateSubscription
} = require('../models/profile.js');
const { mealPlan, apiKey, recipes } = require('../config.js');

module.exports = {
  response: (err, data, res) => {
    if (err) {
      console.log('err');
      res.status(404).json(err);
    }
    console.log('success');
    res.status(200).json(data);
  },
  generateMealPlan: (parameters, cb) => {
    let { timeFrame, targetCalories, diet, exclude } = parameters;
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
        parameters.nutrients = nutrients;
        meals.forEach(async (meal, index) => {
          if (index === 0) {
            parameters.breakfast = meal;
          } else if (index === 1) {
            parameters.lunch = meal;
          } else {
            parameters.dinner = meal;
          }
        });
        cb(null, parameters);
      })
      .catch(err => {
        cb(err, null);
      });
  },
  userPlans: (req, res) => {
    userPlans(req.query.id, (err, userPlans) => {
      module.exports.response(err, userPlans, res);
    });
  },
  userDetails: (req, res) => {
    userDetails(req.query.email, (err, userDetails) => {
      module.exports.response(err, userDetails, res);
    });
  },
  newPlan: (req, res) => {
    const { date, id, target_calories, diet, exclude } = req.body;
    const timeFrame = 'day';
    const targetCalories = target_calories;
    const apiParams = { timeFrame, targetCalories, diet, exclude, id, date };
    module.exports.generateMealPlan(apiParams, async (err, userDetails) => {
      if (err) {
        res.status(404).json(err);
      }
      newPlan(userDetails, (err, newPlan) => {
        module.exports.response(err, newPlan, res);
      });
    });
  },
  changePlan: (req, res) => {
    const { meal_id, id, target_calories, diet, exclude } = req.body;
    const timeFrame = 'day';
    const targetCalories = target_calories;
    const apiParams = { timeFrame, targetCalories, diet, exclude, meal_id, id };
    module.exports.generateMealPlan(apiParams, async (err, userDetails) => {
      if (err) {
        res.status(404).json(err);
      }
      changePlan(userDetails, (err, updatedPlan) => {
        module.exports.response(err, updatedPlan, res);
      });
    });
  },
  updatePreferences: (req, res) => {
    updatePreferences(req.body, (err, updatedPreferences) => {
      module.exports.response(err, updatedPreferences, res);
    });
  },
  updateSubscription: (req, res) => {
    updateSubscription(req.body, (err, updatedSubscription) => {
      module.exports.response(err, updatedSubscription, res);
    });
  }
}
