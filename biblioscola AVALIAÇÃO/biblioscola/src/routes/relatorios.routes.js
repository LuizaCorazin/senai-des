const express = require("express");
const router = express.Router();

const relatoriosController = require("../controller/relatorios.controller");

router.get("/relatorios/reservas-salas", relatoriosController.reservasalas);
router.get("/relatorios/reservas-alunos", relatoriosController.reservasalunos);

module.exports = router;
