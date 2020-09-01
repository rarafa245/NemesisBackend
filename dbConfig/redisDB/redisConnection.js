const Redis = require("ioredis")
const redisConfig = require('./redisConfig')


// Creating a Redis Connection
const redisDB = new Redis(redisConfig)

// Certifying Redis Connection
redisDB.on('connect', () => console.log(`Connected to Redis | Port : ${redisConfig.port}`) )


module.exports = redisDB
