const express = require("express");
const app = express.Router();
const monitoreo = require("./monitoreo");

app.use("/monitoreo/", monitoreo);

module.exports = app;
