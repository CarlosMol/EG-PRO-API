const express = require("express");
const app = express.Router();
const monitoreo = require("./monitoreoRoutes");
const parcelas = require("./parcelasRoutes");

app.use("/monitoreo/", monitoreo);
app.use("/parcelas/", parcelas);

module.exports = app;
