const express = require("express"); //importa um modulo
const cors = require("cors");

const UsuariosRoutes = require ("./src/routes/usuarios.routes");

const app = express(); 

app.use(cors()); 
app.use(express.json());

app.use(livrosRoutes);
app.listen(3000, () => {
    console.log("servidor online na porta 3000");
});