const config = {
    serverConfig:{
        host: process.env.APP_HOST || 'http://localhost',
        port: process.env.APP_PORT || 3000
    }
}

module.exports = config