const express = require('express');
const marketplace = require('../marketplace/marketplace.js');
let profile = require('../profile/profile.js');

let healthyfood = express.Router();
healthyfood.get('/userPlans',profile.userPlans )
healthyfood.get('/userDetails',profile.userDetails )
healthyfood.post('/newPlan', profile.newPlan)
healthyfood.post('/signup',profile.signup )
healthyfood.put('/updatePreferences',profile.updatePreferences )
healthyfood.put('/changePlan',profile.changePlan)
healthyfood.get('/ingredients', marketplace.getAllIngredients);
healthyfood.put('/updateSubscription', profile.updateSubscription);

module.exports.healthyfood = healthyfood;