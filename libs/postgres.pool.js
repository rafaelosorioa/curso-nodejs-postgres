const { Pool } = require('pg');
const config = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
//Create pool connection to the database

const pool = new Pool({ connectionString: URI });
//Only need to pass the pool to be instancied in the service no need to create a connection
//or return it
module.exports = pool;
