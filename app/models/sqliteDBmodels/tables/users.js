const { DataTypes } = require('sequelize')
const { sqlite } = require('./../../../../dbConfig')


const Users = sqlite.define('users', {
  
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  username: {
    type: DataTypes.TEXT,
    allowNull: false
  },

  password: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
  
})

module.exports = Users