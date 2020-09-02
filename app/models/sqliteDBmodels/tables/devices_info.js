const { DataTypes } = require('sequelize')
const { sqlite } = require('./../../../../dbConfig')


const DevicesInfo = sqlite.define('devices_info', {
  
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  device: {
    type: DataTypes.TEXT,
    allowNull: false
  },

  type: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  fix: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  hist: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  ignition: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  date: {
    type: DataTypes.TEXT,
    allowNull: false
  },

  start_time: {
    type: DataTypes.TEXT,
    allowNull: false
  },

  lat: {
    type: DataTypes.REAL,
    allowNull: false
  },

  long: {
    type: DataTypes.REAL,
    allowNull: false
  },

  speed: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  angle: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  time_on: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  
})

module.exports = DevicesInfo