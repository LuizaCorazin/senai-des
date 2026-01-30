const express = require('express');
const {
    listarMedicos,
    buscarMedico,
    cadastrarMedico,
    atualizarMedico,
    excluirMedico
} = require('../controllers/medico.controller');

const router = express.Router();

router.get('/', listarMedicos);
router.get('/:id', buscarMedico);
router.post('/', cadastrarMedico);
router.put('/:id', atualizarMedico);
router.delete('/:id', excluirMedico);

module.exports = router;
