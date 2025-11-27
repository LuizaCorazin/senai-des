const express = require("express");
const router = express.Router();

const alunosController = require("../controller/aluno.controller");

router.get("/alunos", alunosController.listaralunos);
router.post("/aluno", alunosController.cadastraraluno);
router.put("/aluno", alunosController.atualizaraluno);
router.delete("/aluno/:id", alunosController.excluiraluno);

module.exports = router;