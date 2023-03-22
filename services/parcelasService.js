const { db } = require("../database");

const getParcelas = (callback) => {
  db.all("SELECT * FROM parcelas", (err, rows) => {
    if (err) {
      return callback(err);
    }
    callback(null, rows);
  });
};

const postParcelas = (data, callback) => {
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

module.exports = {
  getParcelas,
  postParcelas,
};
