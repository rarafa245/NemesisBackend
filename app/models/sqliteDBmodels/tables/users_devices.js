const { DataTypes } = require('sequelize')
const { sqlite } = require('./../../../../dbConfig')


const UsersDevices = sqlite.define('users_devices', {
  
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  device: {
    type: DataTypes.TEXT,
    allowNull: false
  },

  user_id: {
    type: DataTypes.INTEGER,
    references: {
        model: 'users',
        key: 'user_id'
      }
  }

})

module.exports = UsersDevices