const express = require('express');
const marketplace = require('../marketplace/marketplace.js');
let profile = require('../profile/profile.js');

let healthyfood = express.Router();
// User profile endpoints
healthyfood.get('/userPlans',profile.userPlans);
healthyfood.get('/userDetails',profile.userDetails);

healthyfood.post('/newPlan', profile.newPlan);

healthyfood.put('/updatePreferences',profile.updatePreferences);
healthyfood.put('/changePlan',profile.changePlan);
healthyfood.put('/updateSubscription', profile.updateSubscription);
// Marketplace endpoints
healthyfood.get('/ingredients', marketplace.getAllIngredients);

module.exports.healthyfood = healthyfood;