const path = require('path')

const sqliteConfig = {
    dialect: 'sqlite',
    storage: path.resolve(__dirname, './../../../NemesisDBexport/storage.db'),
    //logging: false,
    define: {
        freezeTableName: true,
        timestamps: false
    }
}

module.exports = sqliteConfig
