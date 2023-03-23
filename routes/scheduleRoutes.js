const express = require("express");
const router = express.Router();
const cronController = require("../controllers/cronController");

router.post("/", cronController.schedule);

module.exports = router;
