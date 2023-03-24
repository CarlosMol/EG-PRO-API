const express = require("express");
const app = express.Router();

const parcelas = require("./parcelasRoutes");
const bodegas = require("./bodegasRoutes");

app.use("/parcelas/", parcelas);
app.use("/bodegas/", bodegas);


module.exports = app;
