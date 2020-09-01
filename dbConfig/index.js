const redisDB = require('./redisDB')
const sqlite = require('./sqliteDB')


module.exports = {
    redisDB : redisDB,
    sqlite: sqlite
}
