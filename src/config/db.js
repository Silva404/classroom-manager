const { Pool } = require('pg')

module.exports = new Pool({
    user: 'postgres',
    password: 'user1',
    database: ''
}) 