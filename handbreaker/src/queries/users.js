const pool = require("../db/dbConfig");
// import pool from '../db/dbConfig';

function createUser(user) {
  const values = [user.username, user.password, user.email]


  return pool
    .query(`
    INSERT INTO users (username, password, email)
    VALUES($1, $2, $3);
    `, values)
}

module.exports = { createUser };