const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "howareyou@17",
    database: "health"
})

module.exports = client
