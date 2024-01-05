const { Sequelize } = require('sequelize');
const config = require('../config/config');
const setupModels = require('../db/models/index');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'mysql',
  // eslint-disable-next-line no-console
  logging: console.log,
});

//Pass the connection to the models
setupModels(sequelize);

//Sync our models with the DB
sequelize.sync();

module.exports = sequelize;
