const planesService = require("../services/planesService");

const getPlanes = (req, res) => {
  planesService.getPlanes((err, planes) => {
    if (err) {
      return res.status(500).json({ error: "Error al obtener los planes" });
    }
    res.status(200).json(planes);
  });
};

const createPlan = (req, res) => {
  planesService.createPlan(req.body, (err, plan) => {
    if (err) {
      return res.status(500).json({ error: "Error al crear el plan" });
    }
    res.status(200).json({ success: true, plan });
  });
};

const updatePlan = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  planesService.updatePlan({ id, data }, (err, plan) => {
    if (err) {
      return res.status(500).json({ error: "Error al actualizar el plan" });
    }
    res.status(200).json({ success: true, plan });
  });
};

const deletePlan = (req, res) => {
  const id = req.params.id;
  planesService.deletePlan({ id }, (err, plan) => {
    if (err) {
      return res.status(500).json({ error: "Error al eliminar el plan" });
    }
    res.status(200).json({ success: true, plan });
  });
};

module.exports = {
  getPlanes,
  createPlan,
  updatePlan,
  deletePlan,
};
