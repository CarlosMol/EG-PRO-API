const express = require("express");
const app = express.Router();
const parcelas = require("./parcelasRoutes");
const predios = require("./prediosRoutes");

app.use("/parcelas/", parcelas);
app.use("/predios/", predios);



module.exports = app;
