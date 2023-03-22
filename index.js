const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const { initDb } = require("./database");

initDb();

app.use(cors());
app.use(bodyParser.json());
app.use("/", require("./routes/_index"));
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
