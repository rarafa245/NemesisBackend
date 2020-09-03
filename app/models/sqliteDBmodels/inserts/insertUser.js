const crypto = require('crypto')
const { Users } = require('./../tables')

/*  Insert functions.
    Acessing tables in DB
    All closures return promisses.
    ORM: Sequelize
*/

const insertUser = (username, password) => {

  const cryptPass = crypto.createHash("md5")
                          .update(password)
                          .digest('hex')

  return Users.create({
      username: username,
      password: cryptPass
    })
}

module.exports = {
    insertUser: insertUser,
}