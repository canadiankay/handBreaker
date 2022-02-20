const { Pool, Client } = require('pg')
require("dotenv").config();
console.log("DB_HOST", process.env.DB_HOST)

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
})


module.exports = pool;

