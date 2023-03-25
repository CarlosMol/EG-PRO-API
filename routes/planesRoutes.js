const express = require("express");
const router = express.Router();
const planesController = require("../controllers/planesController");

router.get("/list", planesController.getPlanes);
router.put("/delete/:id", planesController.deletePlan);
router.put("/:id", planesController.updatePlan);
router.post("/", planesController.createPlan);

module.exports = router;
