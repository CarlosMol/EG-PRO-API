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
  const query = `INSERT INTO parcelas (nombre, cultivo, longitud, latitud, municipio, departamento) VALUES (?, ?, ?, ?, ?, ?)`;
  db.run(
    query,
    [
      data.nombre,
      data.cultivo,
      parseFloat(data.longitud),
      parseFloat(data.latitud),
      data.municipio,
      data.departamento,
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
  const query = `UPDATE parcelas SET nombre = ?, cultivo = ?, longitud = ?, latitud = ?, municipio = ?, departamento = ? WHERE id = ?`;
  db.run(
    query,
    [
      params.data.nombre,
      params.data.cultivo,
      parseFloat(params.data.longitud),
      parseFloat(params.data.latitud),
      params.data.municipio,
      params.data.departamento,
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
