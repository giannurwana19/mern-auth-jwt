const { Sequelize } = require('sequelize');

const database = new Sequelize({
  host: process.env.DB_HOST,
  dialect: process.env.DB_CONNECTION,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
});

database.authenticate().catch(err => {
  console.log(`Error connectino ${err}`);
});

module.exports = database;
