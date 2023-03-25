const express = require("express");
const router = express.Router();
const bodegasController = require("../controllers/bodegasController");

router.get("/list", bodegasController.getBodegas);
router.get("/:id",bodegasController.getBodegaById);
router.put("/delete/:id", bodegasController.deleteBodega);
router.put("/:id", bodegasController.updateBodega);
router.post("/", bodegasController.createBodega);

module.exports = router;
