const express = require("express");
const router = express.Router();
const parcelasController = require("../controllers/parcelasController");

router.get("/", parcelasController.getParcelas);

module.exports = router;
