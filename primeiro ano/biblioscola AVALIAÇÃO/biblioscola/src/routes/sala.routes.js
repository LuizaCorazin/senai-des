const express = require("express");
const router = express.Router();


const salasController = require("../controller/sala.controller");

router.get("/salas", salasController.listarsalas);
router.post("/sala", salasController.cadastrarsala);
router.put("/sala", salasController.atualizarsala);
router.delete("/sala/:id", salasController.excluirsala);

module.exports = router;
