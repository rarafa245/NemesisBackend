 
const { loginUser } = require('./../controller/userLogin')
const { registerAccount } = require('./../controller/userCreate')

const login = (application) => {
  /* Routes related to login. Redirecting to controllers
    :parram - application server
    :return - None
  */
  
  application.post('/login', (req, res) => loginUser(req, res))
  application.post('/register/user', (req, res) => registerAccount(req, res))

}


module.exports = login