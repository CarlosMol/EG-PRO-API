const parcelasService = require("../services/parcelasService");

const getParcelas = (req, res) => {
  parcelasService.getParcelas((err, parcelas) => {
    if (err) {
      return res.status(500).json({ error: "Error al obtener las parcelas" });
    }
    res.status(200).json(parcelas);
  });
};

module.exports = {
  getParcelas,
};
