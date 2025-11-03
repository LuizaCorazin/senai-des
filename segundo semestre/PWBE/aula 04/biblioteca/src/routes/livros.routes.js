const express = require("express");
const router = express.Router();

const LivrosController = require("../controllers/livros.controllers");

router.get("/livros", LivrosController.listar);
router.get("/livros/:id", LivrosController.buscar);
router.post("/livro", LivrosController.cadastrar);
router.delete("/livros/:id", LivrosController.apagar);
router.put("/livro", LivrosController.atualizar);
router.patch("/livro/:id", LivrosController.alterar);

module.exports = router;