const { db } = require("../database");

const getSemillas = (callback) => {
  db.all("SELECT * FROM semillas", (err, rows) => {
    if (err) {
      return callback(err);
    }
    callback(null, rows);
  });
};

const createSemilla = (data, callback) => {
  const query = `INSERT INTO semillas (nombre, temperatura, velocidadViento, direccionViento) VALUES (?, ?, ?, ?)`;
  db.run(
    query,
    [data.nombre, data.temperatura, data.velocidadViento, data.direccionViento],
    (err) => {
      if (err) {
        return callback(err);
      }
      callback(null);
    }
  );
};

const updateSemilla = (params, callback) => {
  const query = `UPDATE semillas SET nombre = ?, temperatura = ?, velocidadViento = ?, direccionViento = ? WHERE id = ?`;
  db.run(
    query,
    [
      params.data.nombre,
      params.data.temperatura,
      params.data.velocidadViento,
      params.data.direccionViento,
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

const deleteSemilla = (data, callback) => {
  const query = `DELETE FROM semillas WHERE id = ?`;
  db.run(query, [parseInt(data.id)], (err) => {
    if (err) {
      return callback(err);
    }
    callback(null);
  });
};

module.exports = {
  getSemillas,
  createSemilla,
  updateSemilla,
  deleteSemilla,
};
