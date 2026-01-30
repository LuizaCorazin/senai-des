const reservas = require("../data/reservas.data");

const listar = (req, res) => {
    res.send(reservas).end();
};

const cadastrar = (req, res) => {
    const data = req.body;
    reservas.push(data);
    res.status(201).send("Cadastrado com sucesso").end();
};

const atualizar = (req, res) => {
    const id = req.params.id;
    const dados = req.body;
    let encontrou = false;

    reservas.forEach((reserva, index) => {
        if (reserva.id === id) {
            reservas[index] = { ...reserva, ...dados };
            encontrou = true;
        }
    });

    if (!encontrou) {
        res.status(404).send("Reserva não encontrada").end();
    } else {
        res.status(200).send("Atualizado com sucesso").end();
    }
};

module.exports = {
    listar,
    cadastrar,
    atualizar
};