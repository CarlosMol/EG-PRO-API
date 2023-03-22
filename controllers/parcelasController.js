const parcelasService = require("../services/parcelasService");

const getParcelas = (req, res) => {
  parcelasService.getParcelas((err, parcelas) => {
    if (err) {
      return res.status(500).json({ error: "Error al obtener las parcelas" });
    }
    res.status(200).json(parcelas);
  });
};
const postParcelas = (req, res) => {
  parcelasService.postParcelas(req.body, (err, parcelas) => {
    if (err) {
      return res.status(500).json({ error: "Error al crear las parcelas" });
    }
    res.status(200).json({ success: true, parcelas });
  });
};

module.exports = {
  getParcelas,
  postParcelas,
};
