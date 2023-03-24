const bodegasService = require("../services/bodegasService");

const getBodegas = (req, res) => {
  bodegasService.getBodegas((err, bodegas) => {
    if (err) {
      return res.status(500).json({ error: "Error al obtener las bodegas" });
    }
    res.status(200).json(bodegas);
  });
};

const createBodega = (req, res) => {
  bodegasService.createBodega(req.body, (err, bodega) => {
    if (err) {
      return res.status(500).json({ error: "Error al crear la bodega" });
    }
    res.status(200).json({ success: true, bodega });
  });
};

const updateBodega = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  bodegasService.updateBodega({ id, data }, (err, bodega) => {
    if (err) {
      return res.status(500).json({ error: "Error al actualizar la bodega" });
    }
    res.status(200).json({ success: true, bodega });
  });
};

const deleteBodega = (req, res) => {
  const id = req.params.id;
  bodegasService.deleteBodega({ id }, (err, bodega) => {
    if (err) {
      return res.status(500).json({ error: "Error al eliminar la bodega" });
    }
    res.status(200).json({ success: true, bodega });
  });
};

module.exports = {
  getBodegas,
  createBodega,
  updateBodega,
  deleteBodega,
};
