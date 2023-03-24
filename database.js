const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./my_database.db");
const initDb = () => {
  db.run(`CREATE TABLE IF NOT EXISTS parcelas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT NOT NULL,
      cultivo TEXT NOT NULL,
      longitud REAL NOT NULL,
      latitud REAL NOT NULL,
      municipio TEXT,
      departamento TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS bodegas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    capacidad TEXT NOT NULL,
    longitud REAL NOT NULL,
    latitud REAL NOT NULL,
    municipio TEXT,
    departamento TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS entregas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      fechaSalida DATE NOT NULL,
      horaSalida TIME NOT NULL,
      fechaEntrega DATE NOT NULL,
      horaEntrega TIME NOT NULL,
      distancia REAL,
      duracion REAL,
      direccionSalida TEXT,
      direccionEntrega TEXT
  )`);
};

module.exports = { db, initDb };
