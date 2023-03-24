const { db } = require("../database");

const getBodegas = (callback) => {
  db.all("SELECT * FROM bodegas", (err, rows) => {
    if (err) {
      return callback(err);
    }
    callback(null, rows);
  });
};

const createBodega = (data, callback) => {
  const query = `INSERT INTO bodegas (nombre, capacidad, longitud, latitud, municipio, departamento) VALUES (?, ?, ?, ?, ?, ?)`;
  db.run(
    query,
    [
      data.nombre,
      parseInt(data.capacidad),
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

const updateBodega = (params, callback) => {
  const query = `UPDATE bodegas SET nombre = ?, capacidad = ?, longitud = ?, latitud = ?, municipio = ?, departamento = ? WHERE id = ?`;
  db.run(
    query,
    [
      params.data.nombre,
      parseInt(params.data.capacidad),
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

const deleteBodega = (data, callback) => {
  const query = `DELETE FROM bodegas WHERE id = ?`;
  db.run(query, [parseInt(data.id)], (err) => {
    if (err) {
      return callback(err);
    }
    callback(null);
  });
};

module.exports = {
  getBodegas,
  createBodega,
  updateBodega,
  deleteBodega,
};
