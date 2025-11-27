const express = require("express");
const router = express.Router();

const especialidadesController = require("../controllers/especialidade.controller");
const pacienteController = require("../controllers/paciente.controller");

router.get("/especialidades", especialidadesController.listarespecialidades);
router.get("/especialidade/:id", especialidadesController.buscarespecialidade);
router.post("/especialidade", especialidadesController.cadastrarespecialidade);
router.delete("/especialidade/:id", especialidadesController.excluirespecialidade);
router.put("/especialidade", especialidadesController.atualizarespecialidade);

module.exports = router;
