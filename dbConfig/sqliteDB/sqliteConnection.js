const Sequelize = require('sequelize')
const sqliteConfig = require('./sqliteConfig')


// Creating a Sqlite connection instance
const sqlite = new Sequelize(sqliteConfig)

// Certifying Sqlite Connection
sqlite.authenticate()
    .then(() => console.log(`Connected to sqlite: ${sqliteConfig.storage}`))
    .catch((error) => console.log(error))


module.exports = sqlite
