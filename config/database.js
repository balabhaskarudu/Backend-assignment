// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // SQLite file path
  logging: false, // Disable logging for cleaner output
});

module.exports = sequelize;
