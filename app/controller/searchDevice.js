const { selectDeviceInfos } = require('./../models/sqliteDBmodels/selects')

const searchDeviceInfos = (req, res, device_id) => {
    /* Get informarions of current device in Relational DB
        :parram - device_id - Identification of the Devide in URL param
        :return - Json with the current information
    */
    
    selectDeviceInfos(device_id)
        .then(response => {

            if (response)
                report = response.map((elemento) => elemento.dataValues)
            else
                report = []

            return res.json({'report': report})

        })
        .catch(err => {
            return res.json({
                'status': false,
                'message': 'Connection Problem with DB. Try again'
            })
        })
        
}


module.exports = {
    searchDeviceInfos: searchDeviceInfos
}
