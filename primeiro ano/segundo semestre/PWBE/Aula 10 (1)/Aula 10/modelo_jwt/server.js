require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const AdmRoutes = require('./src/routes/administrador.routes');
const usersRoutes = require('./src/routes/users.routes');

app.use(express.json());
app.use(cors());

app.use(AdmRoutes);
app.use(usersRoutes);

app.listen(port, () => {
    console.log('Servidor online na ' + port);
})