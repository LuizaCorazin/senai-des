const express = require("express");
const router = express.Router();

const medicosController = require("../controllers/medico.controller");

router.get("/medicos", medicosController.listarmedicos);
router.get("/medico/:id", medicosController.buscarmedico);
router.post("/medico", medicosController.cadastrarmedico);
router.delete("/medicos/:id", medicosController.excluirmedico);
router.put("/medico", medicosController.atualizarmedico);
// router.get("/medicos/atendimentos", medicosController.totalPacientesPorMedico);

module.exports = router;