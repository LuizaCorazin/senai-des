const db = require("../data/connection");

const listarEspecialidades = async (req, res) => {
    try {
        const lista = await db.query("SELECT * FROM especialidade");
        res.status(200).json(lista[0]).end();
    } catch (err) {
        res.status(500).json(err).end();
    }
};

const buscarEspecialidade = async (req, res) => {
    const { id } = req.params;
    try {
        const resultado = await db.query("SELECT * FROM especialidade WHERE id = ?", [id]);
        if (resultado[0].length === 0) return res.status(404).json({ message: "Especialidade não encontrada" }).end();
        res.status(200).json(resultado[0][0]).end();
    } catch (err) {
        res.status(500).json(err).end();
    }
};

const cadastrarEspecialidade = async (req, res) => {
    const { nome } = req.body;
    try {
        const resultado = await db.query("INSERT INTO especialidade VALUES (DEFAULT, ?)", [nome]);
        res.status(201).json({ id: resultado[0].insertId, nome }).end();
    } catch (err) {
        res.status(500).json(err).end();
    }
};

const atualizarEspecialidade = async (req, res) => {
    const { id } = req.params;
    const { nome } = req.body;
    try {
        await db.query("UPDATE especialidade SET nome = ? WHERE id = ?", [nome, id]);
        res.status(200).json({ id, nome }).end();
    } catch (err) {
        res.status(500).json(err).end();
    }
};

const excluirEspecialidade = async (req, res) => {
    const { id } = req.params;
    try {
        await db.query("DELETE FROM especialidade WHERE id = ?", [id]);
        res.status(200).json({ message: "Especialidade excluída" }).end();
    } catch (err) {
        res.status(500).json(err).end();
    }
};

module.exports = {
    listarEspecialidades,
    buscarEspecialidade,
    cadastrarEspecialidade,
    atualizarEspecialidade,
    excluirEspecialidade
};
