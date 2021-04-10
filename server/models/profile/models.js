const db = require('../../../database/index.js');

module.exports = {
  userPlans: (id, cb) => {
    db.query('SELECT * FROM daily_meal_plans WHERE user_id = $1;', [id])
      .then(data => {
        cb(null, data.rows);
      })
      .catch(err => {
        cb(err, null);
      });
  },
  userDetails: (email, cb) => {
    db.query('SELECT * FROM users WHERE email IN ($1)', [email])
      .then(existingUser => {
        if (!existingUser.rows.length > 0) {
          db.query('INSERT INTO users(email) VALUES($1) RETURNING *;', [email])
            .then(newUser => {
              cb(null, newUser.rows[0]);
            })
        } else {
          cb(null, existingUser.rows[0]);
        }
      })
      .catch(err => {
        cb(err, null);
      });
  },
  newPlan: (userDetails, cb) => {
    const { id, date, breakfast, lunch, dinner, nutrients } = userDetails;
    db.query('INSERT INTO daily_meal_plans(user_id, date, breakfast, lunch, dinner, nutrients) VALUES ($1, $2, $3, $4, $5, $6);', [id, date, breakfast, lunch, dinner, nutrients])
      .then(() => {
        db.query('SELECT * FROM daily_meal_plans WHERE user_id = $1;', [id])
          .then(data => {
            cb(null, data.rows);
          })
      })
      .catch(err => {
        cb(err, null);
      })
  },
  changePlan: (userDetails, cb) => {
    const { meal_id, id, breakfast, lunch, dinner, nutrients } = userDetails;
    db.query('UPDATE daily_meal_plans SET breakfast = $1, lunch = $2, dinner = $3, nutrients = $4 WHERE id = $5;', [breakfast, lunch, dinner, nutrients, meal_id])
      .then(() => {
        db.query('SELECT * FROM daily_meal_plans WHERE user_id = $1;', [id])
          .then(data => {
            cb(null, data.rows);
          })
      })
      .catch(err => {
        cb(err, null);
      })
  },
  updatePreferences: (userDetails, cb) => {
    const { id, first_name, last_name, age, target_calories, diet, exclude } = userDetails;
    db.query('UPDATE users SET first_name = $1, last_name = $2, age = $3, target_calories = $4, diet = $5, exclude = $6 WHERE id = $7 RETURNING *;', [first_name, last_name, age, target_calories, diet, exclude, id])
      .then(data => {
        cb(null, data.rows[0]);
      })
      .catch(err => {
        cb(err, null);
      });
  },
  updateSubscription: (userDetails, cb) => {
    const { subscribed, id } = userDetails;
    db.query('UPDATE users SET subscribed = $1 WHERE id = $2 RETURNING *;', [subscribed, id])
      .then(result => {
        cb(null, result.rows);
      })
      .catch(err => {
        cb(err, null);
      })
  },
}