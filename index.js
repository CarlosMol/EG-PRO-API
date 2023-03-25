const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const { initDb } = require("./database");

initDb();

app.use(cors());
app.use(bodyParser.json());
app.use("/", require("./routes/_index"));
const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log("Server listening on port 1337");
});
