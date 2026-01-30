const db = require("../data/connection");

const listarMedicos = async (req, res) => {
    try {
        const lista = await db.query("SELECT * FROM medico");
        res.status(200).json(lista[0]).end();
    } catch (err) {
        res.status(500).json(err).end();
    }
};

const buscarMedico = async (req, res) => {
    const { id } = req.params;
    try {
        const resultado = await db.query("SELECT * FROM medico WHERE id = ?", [id]);
        if (resultado[0].length === 0) return res.status(404).json({ message: "Médico não encontrado" }).end();
        res.status(200).json(resultado[0][0]).end();
    } catch (err) {
        res.status(500).json(err).end();
    }
};

const cadastrarMedico = async (req, res) => {
    const { nome, email, telefone, especialidade_id } = req.body;
    try {
        const resultado = await db.query(
            "INSERT INTO medico VALUES (DEFAULT, ?, ?, ?, ?)",
            [nome, email, telefone, especialidade_id]
        );
        res.status(201).json({ id: resultado[0].insertId, nome, email, telefone, especialidade_id }).end();
    } catch (err) {
        res.status(500).json(err).end();
    }
};

const atualizarMedico = async (req, res) => {
    const { id } = req.params;
    const { nome, email, telefone, especialidade_id } = req.body;
    try {
        await db.query(
            "UPDATE medico SET nome = ?, email = ?, telefone = ?, especialidade_id = ? WHERE id = ?",
            [nome, email, telefone, especialidade_id, id]
        );
        res.status(200).json({ id, nome, email, telefone, especialidade_id }).end();
    } catch (err) {
        res.status(500).json(err).end();
    }
};

const excluirMedico = async (req, res) => {
    const { id } = req.params;
    try {
        await db.query("DELETE FROM medico WHERE id = ?", [id]);
        res.status(200).json({ message: "Médico excluído" }).end();
    } catch (err) {
        res.status(500).json(err).end();
    }
};

module.exports = {
    listarMedicos,
    buscarMedico,
    cadastrarMedico,
    atualizarMedico,
    excluirMedico
};
