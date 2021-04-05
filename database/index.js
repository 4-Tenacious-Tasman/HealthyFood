const { Pool } = require('pg');

const pool = new Pool({
  user: 'healthy',
  host: 'healthy-foods-test.cscmug4huukq.us-west-1.rds.amazonaws.com',
  database: 'healthy',
  password: 'password',
  port: 5432,
});
pool.connect((err, done) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('postgresSQL is connected');
});

module.exports = pool;
