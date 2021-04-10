const express = require('express');
const marketplace = require('../controllers/marketplace.js');
let profile = require('../controllers/profile.js');

let healthyfood = express.Router();
// User profile endpoints
healthyfood.get('/userPlans',profile.userPlans);
healthyfood.get('/userDetails',profile.userDetails);

healthyfood.post('/userPlans', profile.newPlan);

healthyfood.put('/userPlans',profile.changePlan);
healthyfood.put('/userDetails',profile.updatePreferences);
healthyfood.put('/subscription', profile.updateSubscription);
// Marketplace endpoints
healthyfood.get('/ingredients', marketplace.getAllIngredients);

module.exports.healthyfood = healthyfood;