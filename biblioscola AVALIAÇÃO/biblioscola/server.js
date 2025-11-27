require("dotenv").config();
const express = require('express');
const cors = require('cors');

const alunosRoutes = require("./src/routes/aluno.routes");
const salasRoutes = require("./src/routes/sala.routes");
const reservasRoutes = require("./src/routes/reserva.routes");
const relatoriosRoutes = require("./src/routes/relatorios.routes");
const app = express();

app.use(express.json());
app.use(cors());

app.use(alunosRoutes);
app.use(salasRoutes);
app.use(reservasRoutes);
app.use(relatoriosRoutes);

app.listen(3000, () => {
    console.log("Servidor Online");
});
