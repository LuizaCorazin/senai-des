const express = require('express');
const cors = require('cors');

const clienteRoutes = require("./src/routes/cliente.routes");
const filmeRoutes = require("./src/routes/filme.routes");
const locacoesRoutes = require("./src/routes/locacoes.routes");
const app = express();

app.use(express.json());
app.use(cors());

app.use(clienteRoutes);
app.use(filmeRoutes);
app.use(locacoesRoutes);

app.listen(3000, () => {
    console.log("Servidor Online");
});
