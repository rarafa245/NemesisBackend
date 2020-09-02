const { redisDeviceRT } = require('./../models/redisDBmodels')

const searchDeviceRTinfos = (req, res, device_id) => {
    /* Get informarions of current device in RT
        :parram - device_id - Identification of the Devide in URL param
        :return - Json with the current information
    */
    
    redisDeviceRT(device_id)
        .then( (response) => {
            if (response) {
                // If devide is found, return the response
                const deviceInfos = JSON.parse(response);
                return res.json(deviceInfos)
            }
            else {
                //if the device is not found, return information
                return res.json({
                    'status': false,
                    'message': 'Device Offline'
                })
            }
        })
        .catch((err) => {
            return res.json({
                'status': false,
                'message': 'Problems with Dataset'
            })
        })
}


module.exports = {
    searchDeviceRTinfos: searchDeviceRTinfos
}
