const msyql = require('mysql2');

const pool = msyql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'node_complete',
  password: 'password123'
});

module.exports = pool.promise();