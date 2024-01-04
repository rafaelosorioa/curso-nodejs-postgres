const { Pool } = require('pg');

//Create pool connection to the database
//TODO: use enviroment variables
const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'rafa',
  password: 'admin123',
  database: 'my_store',
});
//Only need to pass the pool to be instancied in the service no need to create a connection
//or return it
module.exports = pool;
