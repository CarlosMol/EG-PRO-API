const { db } = require("../database");

const getPlanes = (callback) => {
  db.all("SELECT * FROM planes", (err, rows) => {
    if (err) {
      return callback(err);
    }
    callback(null, rows);
  });
};

const createPlan = (data, callback) => {
  const query = `INSERT INTO planes (idSembrado, frecuencia, estado) VALUES (?, ?, ?)`;
  db.run(
    query,
    [
      parseInt(data.idSembrado),
      data.frecuencia,
      parseInt(data.estado),
    ],
    (err) => {
      if (err) {
        return callback(err);
      }
      callback(null);
    }
  );
};

const updatePlan = (params, callback) => {
  const query = `UPDATE planes SET idSembrado = ?, frecuencia = ?, estado = ? WHERE id = ?`;
  db.run(
    query,
    [
      parseInt(params.data.idSembrado),
      params.data.frecuencia,
      parseInt(params.data.estado),
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

const deletePlan = (data, callback) => {
  const query = `DELETE FROM planes WHERE id = ?`;
  db.run(query, [parseInt(data.id)], (err) => {
    if (err) {
      return callback(err);
    }
    callback(null);
  });
};

module.exports = {
  getPlanes,
  createPlan,
  updatePlan,
  deletePlan,
};
