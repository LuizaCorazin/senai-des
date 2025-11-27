const db = require("../data/connection");

const listarPacientes = async (req, res) => {
    try {
        const lista = await db.query("SELECT * FROM paciente");
        res.status(200).json(lista[0]).end();
    } catch (err) {
        res.status(500).json(err).end();
    }
};

const buscarPaciente = async (req, res) => {
    const { id } = req.params;
    try {
        const resultado = await db.query("SELECT * FROM paciente WHERE id = ?", [id]);
        if (resultado[0].length === 0) return res.status(404).json({ message: "Paciente não encontrado" }).end();
        res.status(200).json(resultado[0][0]).end();
    } catch (err) {
        res.status(500).json(err).end();
    }
};

const cadastrarPaciente = async (req, res) => {
    const { nome, email, telefone } = req.body;
    try {
        const resultado = await db.query(
            "INSERT INTO paciente VALUES (DEFAULT, ?, ?, ?)",
            [nome, email, telefone]
        );
        res.status(201).json({ id: resultado[0].insertId, nome, email, telefone }).end();
    } catch (err) {
        res.status(500).json(err).end();
    }
};

const atualizarPaciente = async (req, res) => {
    const { id } = req.params;
    const { nome, email, telefone } = req.body;
    try {
        await db.query(
            "UPDATE paciente SET nome = ?, email = ?, telefone = ? WHERE id = ?",
            [nome, email, telefone, id]
        );
        res.status(200).json({ id, nome, email, telefone }).end();
    } catch (err) {
        res.status(500).json(err).end();
    }
};

const excluirPaciente = async (req, res) => {
    const { id } = req.params;
    try {
        await db.query("DELETE FROM paciente WHERE id = ?", [id]);
        res.status(200).json({ message: "Paciente excluído" }).end();
    } catch (err) {
        res.status(500).json(err).end();
    }
};

module.exports = {
    listarPacientes,
    buscarPaciente,
    cadastrarPaciente,
    atualizarPaciente,
    excluirPaciente
};
