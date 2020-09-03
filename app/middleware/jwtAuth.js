require('dotenv').config()
const jwt = require('jsonwebtoken')

const authToken = (req, res, next) => {
    /* Checking token consistency
        :parram - headers: authentication - JWT
                           uid - User identification
        :return - Json with error messages if JWT not ok / null if JWT ok
    */

    const token = req.headers['authentication']
    const userID = req.headers['uid']
    
    if (!token) 
        return res.json({
            status: false,
            jwtError: true,
            message: 'Error! Usuário not Authorized!'
        })

    jwt.verify(token, process.env.ACESS_TOKEN_SECRET, (err, data) => {

        console.log(data)

        if (err || (data.JWTUserID != userID))           // Checking jwt key equals to user identification
            return res.json({
                status: false,
                jwtError: true,
                message: 'Error! Invalid Token'
            })

        next()
        return
    })
}

module.exports = {
    authToken: authToken
}