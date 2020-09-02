const appRoutes = (server) => {
    /* Declaring All App Routes
      :parram - server configurations
      :return - Object with all routes
    */
  
      const deviceRTs = require(__dirname + './../app/routes/searchDeviceRT')(server)
  
      return {
        deviceRTs: deviceRTs
      }
  }
  
  
  module.exports = appRoutes