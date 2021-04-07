const express = require('express');
const marketplace = require('../marketplace/marketplace.js');
let profile = require('../profile/profile.js');

let healthyfood = express.Router();
healthyfood.get('/generatePlan', profile.generatePlan )
healthyfood.post('/signup',profile.signup )
healthyfood.put('/updatePreferences',profile.updatePreferences )
healthyfood.get('/ingredients', marketplace.getAllIngredients);

module.exports.healthyfood = healthyfood;