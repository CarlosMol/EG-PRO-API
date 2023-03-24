const parcelasService = require("../services/parcelasService");

const getParcelas = (req, res) => {
  parcelasService.getParcelas((err, parcelas) => {
    if (err) {
      return res.status(500).json({ error: "Error al obtener las parcelas" });
    }
    res.status(200).json(parcelas);
  });
};

const createParcelas = (req, res) => {
  parcelasService.createParcelas(req.body, (err, parcelas) => {
    if (err) {
      return res.status(500).json({ error: "Error al crear las parcelas" });
    }
    res.status(200).json({ success: true, parcelas });
  });
};

const updateParcelas = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  parcelasService.updateParcelas({ id, data }, (err, parcelas) => {
    if (err) {
      return res.status(500).json({ error: "Error al actualizar las parcelas" });
    }
    res.status(200).json({ success: true, parcelas });
  });
};

const deleteParcelas = (req, res) => {
  const id = req.params.id;
  parcelasService.deleteParcelas({ id }, (err, parcelas) => {
    if (err) {
      return res.status(500).json({ error: "Error al crear las parcelas" });
    }
    res.status(200).json({ success: true, parcelas });
  });
};

module.exports = {
  getParcelas,
  createParcelas,
  updateParcelas,
  deleteParcelas,
};
