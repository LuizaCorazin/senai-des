require("dotenv").config();
const express = require('express');
const cors = require('cors');

const medicosRoutes = require("./src/routes/medico.routes");
const consultasRoutes = require("./src/routes/consulta.routes");
const especialidadesRoutes = require("./src/routes/especialidade.routes");
const pacientesRoutes = require("./src/routes/paciente.routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use(medicosRoutes);
app.use(consultasRoutes);
app.use(especialidadesRoutes);
app.use(pacientesRoutes);

app.listen(3000, () => {
    console.log("Servidor Online");
});
