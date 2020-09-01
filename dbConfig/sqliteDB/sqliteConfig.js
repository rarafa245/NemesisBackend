const sqliteConfig = {
    dialect: 'sqlite',
    storage: './../../../DBexport/storage.db',
    //logging: false,
    define: {
        timestamps: false
    }
}

module.exports = sqliteConfig
