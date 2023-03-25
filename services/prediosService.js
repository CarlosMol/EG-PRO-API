const { db } = require("../database");

const getPredios = (callback) => {
  db.all("SELECT * FROM predios", (err, rows) => {
    if (err) {
      return callback(err);
    }
    callback(null, rows);
  });
};

const createPredio = (data, callback) => {
  const query = `INSERT INTO predios (nombre, longitud, latitud, area, clima) VALUES (?, ?, ?, ?, ?)`;
  db.run(
    query,
    [
      data.nombre,
      parseFloat(data.longitud),
      parseFloat(data.latitud),
      parseFloat(data.area),
      data.clima,
    ],
    (err) => {
      if (err) {
        return callback(err);
      }
      callback(null);
    }
  );
};

const updatePredio = (params, callback) => {
  const query = `UPDATE predios SET nombre = ?, longitud = ?, latitud = ?, area = ?, clima = ? WHERE id = ?`;
  db.run(
    query,
    [
      params.data.nombre,
      parseFloat(params.data.longitud),
      parseFloat(params.data.latitud),
      parseFloat(params.data.area),
      params.data.clima,
      params.id,
    ],
    (err) => {
      if (err) {
        return callback(err);
      }
      callback(null);
    }
  );
};

const deletePredio = (data, callback) => {
  const query = `DELETE FROM predios WHERE id = ?`;
  db.run(query, [parseInt(data.id)], (err) => {
    if (err) {
      return callback(err);
    }
    callback(null);
  });
};

module.exports = {
  getPredios,
  createPredio,
  updatePredio,
  deletePredio,
};
