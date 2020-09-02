const { searchDeviceRTinfos } = require('./../controller/searchDeviceRT')

const deviceRT = (application) => {
  /* Routes related to get Real Time information
    :parram - application server
    :return - None
  */
  
  application.get('/api/v1/location/', (req, res) => searchDeviceRTinfos(req, res))

}


module.exports = deviceRT