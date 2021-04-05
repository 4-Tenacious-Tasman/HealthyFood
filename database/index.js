const { Pool } = require('pg');

const pool = new Pool();

pool.connect((err, done) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('postgresSQL is connected');
});

module.exports = pool;
