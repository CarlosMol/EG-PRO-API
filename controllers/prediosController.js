const prediosService = require("../services/prediosService");

const getPredios = (req, res) => {
  prediosService.getPredios((err, predios) => {
    if (err) {
      return res.status(500).json({ error: "Error al obtener los predios" });
    }
    res.status(200).json(predios);
  });
};

const createPredio = (req, res) => {
  prediosService.createPredio(req.body, (err, predio) => {
    if (err) {
      return res.status(500).json({ error: "Error al crear el predio" });
    }
    res.status(200).json({ success: true, predio });
  });
};

const updatePredio = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  prediosService.updatePredio({ id, data }, (err, predio) => {
    if (err) {
      return res.status(500).json({ error: "Error al actualizar el predio" });
    }
    res.status(200).json({ success: true, predio });
  });
};

const deletePredio = (req, res) => {
  const id = req.params.id;
  prediosService.deletePredio({ id }, (err, predio) => {
    if (err) {
      return res.status(500).json({ error: "Error al eliminar el predio" });
    }
    res.status(200).json({ success: true, predio });
  });
};

module.exports = {
  getPredios,
  createPredio,
  updatePredio,
  deletePredio,
};
