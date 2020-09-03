const appRoutes = (server) => {
    /* Declaring All App Routes
      :parram - server configurations
      :return - Object with all routes
    */
  
      const deviceRTs = require(__dirname + './../app/routes/searchDeviceRT')(server)
      const deviceInfo = require(__dirname + './../app/routes/searchDevice')(server)
  
      return {
        deviceRTs: deviceRTs,
        deviceInfo: deviceInfo
      }
  }
  
  
  module.exports = appRoutes