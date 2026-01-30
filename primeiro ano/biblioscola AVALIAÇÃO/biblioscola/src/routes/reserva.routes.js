const express = require("express");
const router = express.Router();

const reservasController = require("../controller/reserva.controller");

router.get("/reservas", reservasController.listarreservas);
router.post("/reserva", reservasController.cadastrarreserva);
router.put("/reserva", reservasController.atualizarreserva);
router.delete("/reserva/:id", reservasController.excluirreserva);

module.exports = router;