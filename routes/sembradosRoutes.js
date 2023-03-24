const express = require("express");
const router = express.Router();
const sembradosController = require("../controllers/sembradosController");

router.get("/list", sembradosController.getSembrados);
router.put("/delete/:id", sembradosController.deleteSembrado);
router.put("/:id", sembradosController.updateSembrado);
router.post("/", sembradosController.createSembrado);

module.exports = router;