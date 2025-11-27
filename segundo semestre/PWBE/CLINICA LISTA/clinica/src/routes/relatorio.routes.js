const express = require("express");
const router = express.Router();

const relatorioController = require("../controllers/relatorio.controller");

router.get("/relatorio/paciente/:id", relatorioController.consultasPorPaciente);
router.get("/relatorio/medico-data", relatorioController.consultasPorMedicoData);
router.get("/relatorio/especialidade/:id", relatorioController.consultasPorEspecialidade);
router.get("/relatorio/total-pacientes-medico", relatorioController.totalPacientesPorMedico);
router.get("/relatorio/detalhado", relatorioController.relatorioDetalhado);

module.exports = router;
