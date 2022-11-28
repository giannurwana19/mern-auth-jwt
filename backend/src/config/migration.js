require('dotenv').config();
const database = require('./database');
require('../models/User');

try {
  (async () => {
    await database.authenticate();
    await database.sync();
  })();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
