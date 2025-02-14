// models/HeartRate.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Patient = require('./Patient');

const HeartRate = sequelize.define('HeartRate', {
  rate: { type: DataTypes.INTEGER, allowNull: false },
  recordedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

// Define relationship: One patient can have many heart rate records
Patient.hasMany(HeartRate, { foreignKey: 'patientId', onDelete: 'CASCADE' });
HeartRate.belongsTo(Patient, { foreignKey: 'patientId' });

module.exports = HeartRate;
