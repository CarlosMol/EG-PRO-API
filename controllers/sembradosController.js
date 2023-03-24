const sembradosService = require("../services/sembradosService");

const getSembrados = (req, res) => {
  sembradosService.getSembrados((err, sembrados) => {
    if (err) {
      return res.status(500).json({ error: "Error al obtener los Sembrados" });
    }
    res.status(200).json(sembrados);
  });
};

const createSembrado = (req, res) => {
  sembradosService.createSembrado(req.body, (err, sembrado) => {
    if (err) {
      return res.status(500).json({ error: "Error al crear el Sembrado" });
    }
    res.status(200).json({ success: true, sembrado });
  });
};

const updateSembrado = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  sembradosService.updateSembrado({ id, data }, (err, sembrado) => {
    if (err) {
      return res.status(500).json({ error: "Error al actualizar el Sembrado" });
    }
    res.status(200).json({ success: true, sembrado });
  });
};

const deleteSembrado = (req, res) => {
  const id = req.params.id;
  sembradosService.deleteSembrado({ id }, (err, sembrado) => {
    if (err) {
      return res.status(500).json({ error: "Error al eliminar el Sembrado" });
    }
    res.status(200).json({ success: true, sembrado });
  });
};

module.exports = {
  getSembrados,
  createSembrado,
  updateSembrado,
  deleteSembrado,
};
