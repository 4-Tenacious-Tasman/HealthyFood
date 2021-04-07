const express = require('express');
let profile = require('../profile/profile.js')

let healthyfood = express.Router();
healthyfood.get('/userPlans',profile.userPlans )
healthyfood.get('/user',profile.user )
healthyfood.post('/newPlan', profile.newPlan)
healthyfood.post('/signup',profile.signup )
healthyfood.put('/updatePreferences',profile.updatePreferences )
healthyfood.put('/changePlan',profile.changePlan)

module.exports.healthyfood = healthyfood;