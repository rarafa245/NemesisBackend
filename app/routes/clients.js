 
const { loginUser } = require('./../controller/userLogin')
const { registerAccount } = require('./../controller/userCreate')
const { meuTeste } = require('./../controller/teste')
const { httpRequest } = require('./helpers')

const login = (application) => {
  /* Routes related to Client manage
    :parram - application server
    :return - None
  */
  
  application.post('/login', (req, res) => loginUser(req, res))
  application.post('/register/user', (req, res) => registerAccount(req, res))
  application.post('/teste', (req, res) => meuTeste(httpRequest(req, res)))

}


module.exports = login
