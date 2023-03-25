const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./my_database.db");
const initDb = () => {
  db.run(`CREATE TABLE IF NOT EXISTS predios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT NOT NULL,
      area REAL NOT NULL,
      longitud REAL NOT NULL,
      latitud REAL NOT NULL,
      clima TEXT NOT NULL
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS parcelas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    idPredio INTEGER,
    cultivo TEXT NOT NULL,
    longitud REAL NOT NULL,
    latitud REAL NOT NULL,
    direccion TEXT NOT NULL,
    FOREIGN KEY (idPredio) REFERENCES predios (id)
)`);

};

module.exports = { db, initDb };
