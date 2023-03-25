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
  const query = `INSERT INTO parcelas (idPredio, cultivo, longitud, latitud, direccion) VALUES (?, ?, ?, ?, ?)`;
  db.run(
    query,
    [
      parseInt(data.idPredio),
      data.cultivo,
      parseFloat(data.longitud),
      parseFloat(data.latitud),
      data.direccion,
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
  const query = `UPDATE parcelas SET idPredio = ?, cultivo = ?, longitud = ?, latitud = ?, direccion = ? WHERE id = ?`;
  db.run(
    query,
    [
      parseInt(params.data.idPredio),
      params.data.cultivo,
      parseFloat(params.data.longitud),
      parseFloat(params.data.latitud),
      params.data.direccion,
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
