 
const { Users, DevicesInfo, UsersDevices } = require('./../tables')
const { QueryTypes } = require('sequelize')
const { sqlite }  = require('./../../../../dbConfig')

/*  Query functions.
    Acessing tables in DB
    All closures return promisses.
    ORM: Sequelize
*/

const selectAllDevices = () => DevicesInfo.findAll()

const selectAllUsers = () => Users.findAll()

const selectAllUsersDevices = () => UsersDevices.findAll()

const selectUserDevices = () => {

    return sqlite.query(
        "SELECT `users_devices`.`device`, `users`.`user_id`\
        from  `users_devices` AS `users_devices`\
        INNER JOIN `users` as `users` USING(user_id)",
        {type: QueryTypes.SELECT}
    )
}

module.exports = {
    selectAllDevices: selectAllDevices,
    selectAllUsers: selectAllUsers,
    selectAllUsersDevices: selectAllUsersDevices,
    selectUserDevices: selectUserDevices
}
