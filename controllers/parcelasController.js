const parcelasService = require("../services/parcelasService");

const getParcelas = (req, res) => {
  parcelasService.getParcelas((err, parcelas) => {
    if (err) {
      return res.status(500).json({ error: "Error al obtener las parcelas" });
    }
    res.status(200).json(parcelas);
  });
};

const getParcelasById = (req, res) => {
  const id = req.params.id;
  parcelasService.getParcelasById({ id }, (err, parcelas) => {
    if (err) {
      return res.status(500).json({ error: "Error al obtener las parcelas" });
    }
    res.status(200).json(parcelas);
  });
};

const createParcela = (req, res) => {
  parcelasService.createParcela(req.body, (err, parcelas) => {
    if (err) {
      return res.status(500).json({ error: "Error al crear las parcelas" });
    }
    res.status(200).json({ success: true, parcelas });
  });
};

const updateParcela = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  parcelasService.updateParcela({ id, data }, (err, parcelas) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Error al actualizar las parcelas" });
    }
    res.status(200).json({ success: true, parcelas });
  });
};

const deleteParcela = (req, res) => {
  const id = req.params.id;
  parcelasService.deleteParcela({ id }, (err, parcelas) => {
    if (err) {
      return res.status(500).json({ error: "Error al crear las parcelas" });
    }
    res.status(200).json({ success: true, parcelas });
  });
};

module.exports = {
  getParcelas,
  getParcelasById,
  createParcela,
  updateParcela,
  deleteParcela,
};
