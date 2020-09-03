const appRoutes = (server) => {
    /* Declaring All App Routes
      :parram - server configurations
      :return - Object with all routes
    */
  
      const client = require(__dirname + './../app/routes/clients')(server)
      const deviceRTs = require(__dirname + './../app/routes/searchDeviceRT')(server)
      const deviceInfo = require(__dirname + './../app/routes/searchDevice')(server)
      
  
      return {
        client: client,
        deviceRTs: deviceRTs,
        deviceInfo: deviceInfo
      }
  }
  
  
  module.exports = appRoutes