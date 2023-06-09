const { db } = require("../database");

const getSembrados = (callback) => {
  db.all("SELECT * FROM sembrados", (err, rows) => {
    if (err) {
      return callback(err);
    }
    callback(null, rows);
  });
};

const createSembrado = (data, callback) => {
  const query = `INSERT INTO sembrados (nombre,fechaSiembra,idParcela, idSemilla) VALUES (?, ?, ?, ?)`;
  db.run(
    query,
    [data.nombre, data.fechaSiembra, data.idParcela, data.idSemilla],
    (err) => {
      if (err) {
        console.log(err);
        return callback(err);
      }
      callback(null);
    }
  );
};

const updateSembrado = (params, callback) => {
  const query = `UPDATE sembrados SET nombre = ?, fechaSiembra = ?, idParcela = ?, idSemilla = ? WHERE id = ?`;
  db.run(
    query,
    [
      params.data.nombre,
      params.data.fechaSiembra,
      params.data.idParcela,
      params.data.idSemilla,
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

const deleteSembrado = (data, callback) => {
  const query = `DELETE FROM sembrados WHERE id = ?`;
  db.run(query, [parseInt(data.id)], (err) => {
    if (err) {
      return callback(err);
    }
    callback(null);
  });
};

module.exports = {
  getSembrados,
  createSembrado,
  updateSembrado,
  deleteSembrado,
};
