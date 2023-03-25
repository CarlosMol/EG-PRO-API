const express = require("express");
const app = express.Router();
const parcelas = require("./parcelasRoutes");
const semillas = require("./semillasRoutes");
const sembrados = require("./sembradosRoutes");
const planes = require("./planesRoutes");
// const schedule = require("./scheduleRoutes");

app.use("/parcelas/", parcelas);
app.use("/semillas/", semillas);
app.use("/sembrados/", sembrados);
app.use("/planes/", planes);

// app.use("/schedule/", schedule);

module.exports = app;
