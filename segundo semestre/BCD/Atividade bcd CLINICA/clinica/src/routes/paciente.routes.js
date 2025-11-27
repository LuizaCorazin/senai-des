const express = require('express');
const {
    listarPacientes,
    buscarPaciente,
    cadastrarPaciente,
    atualizarPaciente,
    excluirPaciente
} = require('../controllers/paciente.controller');

const router = express.Router();

router.get('/', listarPacientes);
router.get('/:id', buscarPaciente);
router.post('/', cadastrarPaciente);
router.put('/:id', atualizarPaciente);
router.delete('/:id', excluirPaciente);

module.exports = router;
