const { searchDeviceInfos } = require('./../controller/searchDevice')
const authToken = require('./../middleware')

const deviceInfos = (application) => {
  /* Routes related to get device information
    :parram - application server
    :return - None
  */
  
  application.get('/api/v1/report/', authToken, (req, res) => searchDeviceInfos(req, res, device_id=req.query.device_id))
  
}


module.exports = deviceInfos
