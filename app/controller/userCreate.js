const  { insertUser } = require('./../models/sqliteDBmodels/inserts')

const registerAccount = (req, res) => {
  /* Processing user data, registering and sending status
    :parram - req: username - New client username
                    password - New client password
    :return - res: Json with the Success / failure of the process
  */

  const userData = req.body

  insertUser(userData.username, userData.password)
    .then(() => res.json({
      Status: true,
      Message: "Novo usuário registrado com sucesso!"
    }))
    .catch((err) => errorHandlerForRegisterUser(err, res) )
}
  
  
const errorHandlerForRegisterUser = (err, res) => {
  /* Handling errors and responses after bad query in register new users
      :parram - err: error object after bad query    
      :return - res: Jon with the proper message
  */

  errorCode = err.errors[0].type

  switch (errorCode) {
    case 'unique violation':

      const field = err.errors[0].path    // username or email fieds
      if (field === 'username')
        res.json({
          Status: false,
          Message: "Erro! User already exist. Try again!"
        })

      break

    default:
    
      res.json({
        Status: false,
        Message: "An error ocurred, try Again!"
      })
      break
  }
}


module.exports = {
  registerAccount: registerAccount 
}