const express = require("express"); //importa um modulo
const cors = require("cors");

const UsuariosRoutes = require ("./src/routes/usuarios.routes");

const app = express(); //carrega config. inicial do express

app.use(cors()); //aplica cors ao express
app.use(express.json()); //habilita a comunicação com json

//app.use(UsuariosRoutes); //inclui as rotas ao express
app.use(livrosRoutes);
app.listen(3000, () => {
    console.log("servidor online na porta 3000");
});