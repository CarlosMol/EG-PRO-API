const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // handle GET request for /monitoreo
  res.send("Hola Mundo!");
});

router.post("/", (req, res) => {
  // handle POST request for /monitoreo
});

module.exports = router;
