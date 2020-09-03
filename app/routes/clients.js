 
const { loginUser } = require('./../controller/userLogin')

const login = (application) => {
  /* Routes related to login. Redirecting to controllers
    :parram - application server
    :return - None
  */
  
  application.post('/login', (req, res) => loginUser(req, res))

}


module.exports = login