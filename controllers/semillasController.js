const semillasService = require("../services/semillasService");

const getSemillas = (req, res) => {
  semillasService.getSemillas((err, semillas) => {
    if (err) {
      return res.status(500).json({ error: "Error al obtener las Semillas" });
    }
    res.status(200).json(semillas);
  });
};

const createSemilla = (req, res) => {
  semillasService.createSemilla(req.body, (err, semillas) => {
    if (err) {
      return res.status(500).json({ error: "Error al crear las Semillas" });
    }
    res.status(200).json({ success: true, semillas });
  });
};

const updateSemilla = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  semillasService.updateSemilla({ id, data }, (err, semillas) => {
    if (err) {
      return res.status(500).json({ error: "Error al actualizar las Semillas" });
    }
    res.status(200).json({ success: true, semillas });
  });
};

const deleteSemilla = (req, res) => {
  const id = req.params.id;
  semillasService.deleteSemilla({ id }, (err, semillas) => {
    if (err) {
      return res.status(500).json({ error: "Error al crear las Semillas" });
    }
    res.status(200).json({ success: true, semillas });
  });
};

module.exports = {
  getSemillas,
  createSemilla,
  updateSemilla,
  deleteSemilla,
};
