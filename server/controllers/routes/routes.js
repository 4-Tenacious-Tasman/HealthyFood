const express = require('express');
let profile = require('../profile/profile.js')

let healthyfood = express.Router();
healthyfood.get('/generatePlan', profile.generatePlan )
healthyfood.post('/signup',profile.signup )
healthyfood.put('/updatePreferences',profile.updatePreferences )

module.exports.healthyfood = healthyfood;