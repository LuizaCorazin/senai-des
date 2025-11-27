const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Importa as rotas
const loginRoutes = require("./routes/login.routes");
const medicoRoutes = require("./routes/medico.routes");
const pacienteRoutes = require("./routes/paciente.routes");
const consultaRoutes = require("./routes/consulta.routes");
const especialidadeRoutes = require("./routes/especialidade.routes");

// Usa as rotas principais
app.use("/auth", loginRoutes);
app.use("/medicos", medicoRoutes);
app.use("/pacientes", pacienteRoutes);
app.use("/consultas", consultaRoutes);
app.use("/especialidades", especialidadeRoutes);

// Rota padrão de verificação
app.get("/", (req, res) => {
    res.status(200).send("🚑 API da Clínica funcionando perfeitamente!");
});

// Porta fixa 3000
app.listen(3000, () => {
    console.log("🔥 Servidor rodando na porta 3000");
});
