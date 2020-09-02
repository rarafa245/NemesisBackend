const { redisDB } = require('./../../../../dbConfig')

// Funtions to select device informations 
// in Redis DB. Information in Json Form

const redisDeviceRT = (device_id) => redisDB.get(`tags:${device_id}`)


module.exports = {
  redisDeviceRT: redisDeviceRT
}
