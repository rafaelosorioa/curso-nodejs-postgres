const { Client } = require('pg');

async function getConnection() {
  //Create connection to the database
  //TODO: use enviroment variables
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'rafa',
    password: 'admin123',
    database: 'my_store',
  });

  //Connect to the client
  await client.connect();

  return client;
}

module.exports = getConnection;
