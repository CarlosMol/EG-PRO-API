const express = require("express");
const app = express();
const { initDb } = require("./database");

initDb();
app.use("/", require("./routes/_index"));
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
