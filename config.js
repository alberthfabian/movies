module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!',
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'remotemysql.com',
        user: process.env.MYSQL_USER || 'P4QN3U05FR',
        password: process.env.MYSQL_PASS || 'hEq1t6U0rW',
        database: process.env.MYSQL_DB || 'P4QN3U05FR',
    },
}