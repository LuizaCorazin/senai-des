const express = require('express');
const {
    listarEspecialidades,
    buscarEspecialidade,
    cadastrarEspecialidade,
    atualizarEspecialidade,
    excluirEspecialidade
} = require('../controllers/especialidade.controller');

const router = express.Router();

router.get('/', listarEspecialidades);
router.get('/:id', buscarEspecialidade);
router.post('/', cadastrarEspecialidade);
router.put('/:id', atualizarEspecialidade);
router.delete('/:id', excluirEspecialidade);

module.exports = router;
