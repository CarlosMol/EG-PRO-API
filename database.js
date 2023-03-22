const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./my_database.db");
const initDb = () => {
  db.run(`CREATE TABLE IF NOT EXISTS parcelas (
      id INTEGER PRIMARY KEY,
      nombre TEXT NOT NULL,
      area REAL NOT NULL
  )`);
};

module.exports = { db, initDb };
