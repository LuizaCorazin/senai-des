const express = require("express");
const router = express.Router();

const consultasController = require("../controllers/consulta.controller");


router.get("/consultas", consultasController.listarconsultas);
router.get("/consulta/:id", consultasController.buscarconsulta);
router.post("/consulta", consultasController.cadastrarconsulta);
router.delete("/consultas/:id", consultasController.excluirconsulta);
router.put("/consulta/:id", consultasController.atualizarconsulta);
router.get("/consultas/paciente/:id", consultasController.historicoPorPaciente);
router.get("/consultas/medico/:id/:data", consultasController.agendaMedico);
router.get("/consultas/especialidade/:id", consultasController.consultasPorEspecialidade);


module.exports = router;
