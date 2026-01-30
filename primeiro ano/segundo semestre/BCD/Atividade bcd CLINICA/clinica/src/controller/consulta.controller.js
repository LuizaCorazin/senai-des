const db = require("../data/connection");

const listarConsultas = async (req, res) => {
    try {
        const lista = await db.query("SELECT * FROM consulta");
        res.status(200).json(lista[0]).end();
    } catch (err) {
        res.status(500).json(err).end();
    }
};

const buscarConsulta = async (req, res) => {
    const { id } = req.params;
    try {
        const resultado = await db.query("SELECT * FROM consulta WHERE id = ?", [id]);
        if (resultado[0].length === 0) return res.status(404).json({ message: "Consulta não encontrada" }).end();
        res.status(200).json(resultado[0][0]).end();
    } catch (err) {
        res.status(500).json(err).end();
    }
};

const cadastrarConsulta = async (req, res) => {
    const { data, hora, status, descricao, paciente_id, medico_id, especialidade_id } = req.body;
    try {
        const resultado = await db.query(
            "INSERT INTO consulta VALUES (DEFAULT, ?, ?, ?, ?, ?, ?, ?)",
            [data, hora, status, descricao, paciente_id, medico_id, especialidade_id]
        );
        res.status(201).json({
            id: resultado[0].insertId,
            data,
            hora,
            status,
            descricao,
            paciente_id,
            medico_id,
            especialidade_id
        }).end();
    } catch (err) {
        res.status(500).json(err).end();
    }
};

const atualizarConsulta = async (req, res) => {
    const { id } = req.params;
    const { data, hora, status, descricao, paciente_id, medico_id, especialidade_id } = req.body;
    try {
        await db.query(
            "UPDATE consulta SET data = ?, hora = ?, status = ?, descricao = ?, paciente_id = ?, medico_id = ?, especialidade_id = ? WHERE id = ?",
            [data, hora, status, descricao, paciente_id, medico_id, especialidade_id, id]
        );
        res.status(200).json({ id, data, hora, status, descricao, paciente_id, medico_id, especialidade_id }).end();
    } catch (err) {
        res.status(500).json(err).end();
    }
};

const excluirConsulta = async (req, res) => {
    const { id } = req.params;
    try {
        await db.query("DELETE FROM consulta WHERE id = ?", [id]);
        res.status(200).json({ message: "Consulta excluída" }).end();
    } catch (err) {
        res.status(500).json(err).end();
    }
};

module.exports = {
    listarConsultas,
    buscarConsulta,
    cadastrarConsulta,
    atualizarConsulta,
    excluirConsulta
};
