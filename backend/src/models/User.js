const { DataTypes } = require('sequelize');
const database = require('../config/database');

const User = database.define(
  'users',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
    },
    email: {
      type: DataTypes.STRING(100),
    },
    password: {
      type: DataTypes.STRING(100),
    },
    refreshToken: {
      type: DataTypes.STRING(100),
    },
  },
  {
    freezeTableName: false,
    timestamps: true,
  }
);

module.exports = User;

(async () => {
  await database.sync();
})();
