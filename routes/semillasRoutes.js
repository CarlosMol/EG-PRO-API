const express = require("express");
const router = express.Router();
const semillasController = require("../controllers/semillasController");

router.get("/list", semillasController.getSemillas);
router.put("/delete/:id", semillasController.deleteSemilla);
router.put("/:id", semillasController.updateSemilla);
router.post("/", semillasController.createSemilla);

module.exports = router;