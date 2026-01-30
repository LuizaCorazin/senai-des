const express = require('express');
const {
    listarConsultas,
    buscarConsulta,
    cadastrarConsulta,
    atualizarConsulta,
    excluirConsulta
} = require('../controllers/consulta.controller');

const router = express.Router();

router.get('/', listarConsultas);
router.get('/:id', buscarConsulta);
router.post('/', cadastrarConsulta);
router.put('/:id', atualizarConsulta);
router.delete('/:id', excluirConsulta);

module.exports = router;
