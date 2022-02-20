const authRouter = require('./routes/auth')
const express = require('express')
const morgan = require("morgan")
const bodyParser = require("body-parser")
// import { createServer } from "http";

const app = express();
const PORT = process.env.PORT || 3002;
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/auth', authRouter)

// const server = require("http").createServer(app)
app.listen(PORT, () => {
  console.log(`Handbreaker backend listining on PORT ${PORT}`)
});
