const express = require("express");
const router = express.Router();
const parcelasController = require("../controllers/parcelasController");

router.get("/list", parcelasController.getParcelas);
router.put("/delete/:id", parcelasController.deleteParcelas);
router.put("/:id", parcelasController.updateParcelas);
router.post("/", parcelasController.createParcelas);


module.exports = router;
