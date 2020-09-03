 
const { Users, DevicesInfo, UsersDevices } = require('./../tables')
const { QueryTypes } = require('sequelize')
const { sqlite }  = require('./../../../../dbConfig')

/*  Query functions.
    Acessing tables in DB
    All closures return promisses.
    ORM: Sequelize
*/

const selectDeviceInfos = (device_id) => DevicesInfo.findAll({
    where: {
        device: device_id
    }
})

const searchUser = (username) => Users.findAll({
    limit: 1,
    attributes: ['user_id', 'username', 'password'],
    where: { username: username }
})


module.exports = {
    selectDeviceInfos: selectDeviceInfos,
    searchUser: searchUser
}
