const express = require("express");
const router = express.Router();
const { createUser } = require('../queries/users')
// import * as user from "../queries/users"

router.post('/register', (req, res) => {
  console.log("req.body!!!!!!!! =", req.body)
  const user = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  }
  createUser(user)
  return res.send('Sucessfully registered')
})

module.exports = router;