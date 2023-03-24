const { db } = require("../database");

const getParcelas = (callback) => {
  db.all("SELECT * FROM parcelas", (err, rows) => {
    if (err) {
      return callback(err);
    }
    callback(null, rows);
  });
};

const createParcela = (data, callback) => {
  const query = `INSERT INTO parcelas (nombre, longitud, latitud, area) VALUES (?, ?, ?, ?)`;
  db.run(
    query,
    [
      data.nombre,
      parseFloat(data.longitud),
      parseFloat(data.latitud),
      parseFloat(data.area),
    ],
    (err) => {
      if (err) {
        return callback(err);
      }
      callback(null);
    }
  );
};

const updateParcela = (params, callback) => {
  const query = `UPDATE parcelas SET nombre = ?, longitud = ?, latitud = ?, area = ? WHERE id = ?`;
  db.run(
    query,
    [
      params.data.nombre,
      parseFloat(params.data.longitud),
      parseFloat(params.data.latitud),
      parseFloat(params.data.area),
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

const deleteParcela = (data, callback) => {
  const query = `DELETE FROM parcelas WHERE id = ?`;
  db.run(query, [parseInt(data.id)], (err) => {
    if (err) {
      return callback(err);
    }
    callback(null);
  });
};

module.exports = {
  getParcelas,
  createParcela,
  updateParcela,
  deleteParcela,
};
