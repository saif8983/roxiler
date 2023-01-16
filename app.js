const express = require('express');
const app = express();
const request = require('request');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongos=require('./DB/DBConnection.js')
const cors = require('cors')
require("dotenv").config();
const port= process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
  });