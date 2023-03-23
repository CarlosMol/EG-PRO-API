const express = require("express");
const app = express.Router();
const monitoreo = require("./monitoreoRoutes");
const parcelas = require("./parcelasRoutes");
const schedule = require("./scheduleRoutes");

app.use("/monitoreo/", monitoreo);
app.use("/parcelas/", parcelas);
app.use("/schedule/", schedule);

module.exports = app;
