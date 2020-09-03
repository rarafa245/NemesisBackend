const crypto = require('crypto')
const { createToken } = require('./createJwt') 
const { searchUser } = require('./../models/sqliteDBmodels/selects')

const loginUser = (req, res) => {
    /* Searching User in DB and sending status
      :parram - req: username - Client Username
                     password - Client Password
      :return - res: Json with the Success / failure of the process
    */
  
    const userData = req.body
  
    searchUser(userData.username)
      .then((query) => {
  
        const response = query[0].dataValues
        const cryptPass = crypto.createHash("md5")
                              .update(userData.password)
                              .digest('hex')
  
        if (response.password != cryptPass) {
          return res.json({
            status: false,
            message: 'Invalid Passord! Try Again!'
          })
        }
  
        const EXPIRE_JWT_TIME = 40
        const token = createToken(response.user_id, EXPIRE_JWT_TIME)
  
        return res.json({
          userID: response.user_id,
          JWT: token,
        })
      })
      .catch((err) => {
        return res.json({
          status: false,
          message: 'Username not registraded'
        })
      })
  }

  module.exports = {
    loginUser: loginUser
  }