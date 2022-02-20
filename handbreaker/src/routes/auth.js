const express = require("express");
const router = express.Router();
const { createUser } = require('../queries/users')
// import * as user from "../queries/users"

router.post('/register', async (req, res) => {
  console.log("req!!!!!!!! =", req)
  const user = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  }
  const user_id = await createUser(user);
  console.log("USER_ID=======", user_id)
  if (user_id) {

    return res.send('Sucessfully registered')
  }
  return res.status(500)
})

module.exports = router;