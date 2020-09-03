const { searchDeviceRTinfos } = require('./../controller/searchDeviceRT')

const deviceRT = (application) => {
  /* Routes related to get Real Time device information
    :parram - application server
    :return - None
  */
  
  application.get('/api/v1/location/', (req, res) => searchDeviceRTinfos(req, res, device_id=req.query.device_id))

}


module.exports = deviceRT
