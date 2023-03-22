const express = require("express");
const router = express.Router();
const parcelasController = require("../controllers/parcelasController");

router.get("/", parcelasController.getParcelas);
router.post("/", parcelasController.postParcelas);
// router.put("/", parcelasController.putParcelas);

module.exports = router;
