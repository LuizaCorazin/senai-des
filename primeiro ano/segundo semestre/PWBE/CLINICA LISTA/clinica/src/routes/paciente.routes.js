const express = require("express");
const router = express.Router();

const pacientesController = require("../controllers/paciente.controller");

router.get("/pacientes", pacientesController.listarpacientes);
router.get("/paciente/:id", pacientesController.buscarpaciente);
router.post("/paciente", pacientesController.cadastrarpaciente);
router.delete("/paciente/:id", pacientesController.excluirpaciente);
router.put("/paciente", pacientesController.atualizarpaciente);
router.get("/paciente/:id", pacientesController.buscarpaciente);

module.exports = router;