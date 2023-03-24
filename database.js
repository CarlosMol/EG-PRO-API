const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./my_database.db");
const initDb = () => {
  db.run(`CREATE TABLE IF NOT EXISTS parcelas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT NOT NULL,
      longitud REAL NOT NULL,
      latitud REAL NOT NULL,
      area REAL NOT NULL
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS semillas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    temperatura BOOLEAN DEFAULT 0,
    velocidadViento BOOLEAN DEFAULT 0,
    direccionViento BOOLEAN DEFAULT 0
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS sembrados (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT NOT NULL,
      idParcela INTEGER,
      idSemilla INTEGER,
      fechaSiembra DATE NOT NULL,
      FOREIGN KEY (idParcela) REFERENCES parcelas (id),
      FOREIGN KEY (idSemilla) REFERENCES semillas (id)
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS planes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    idSembrado INTEGER,
    frecuencia TEXT NOT NULL,
    estado INTEGER DEFAULT 1,
    FOREIGN KEY (idSembrado) REFERENCES Sembrados (id)
)`);

};

module.exports = { db, initDb };
