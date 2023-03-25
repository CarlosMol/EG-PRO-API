const express = require("express");
const router = express.Router();
const prediosController = require("../controllers/prediosController");

router.get("/list", prediosController.getPredios);
router.put("/delete/:id", prediosController.deletePredio);
router.put("/:id", prediosController.updatePredio);
router.post("/", prediosController.createPredio);

module.exports = router;
