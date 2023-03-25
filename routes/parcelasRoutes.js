const express = require("express");
const router = express.Router();
const parcelasController = require("../controllers/parcelasController");

router.get("/list", parcelasController.getParcelas);
router.get("/:id", parcelasController.getParcelasById);
router.put("/delete/:id", parcelasController.deleteParcela);
router.put("/:id", parcelasController.updateParcela);
router.post("/", parcelasController.createParcela);


module.exports = router;
