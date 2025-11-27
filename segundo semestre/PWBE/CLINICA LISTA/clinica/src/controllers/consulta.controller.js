const db = require("../data/connection");

const consultas = [];

const listarconsultas = async (req, res) => {
    const lista = await db.query("SELECT * FROM consulta");
    res.json(lista[0]).end();
};

const buscarconsulta = async (req, res) => {
    const idconsulta = req.params.id;
    const consulta = await db.query("SELECT * FROM consulta WHERE id = ?", [idconsulta]);
    res.json(consulta[0][0]).end();
};

const cadastrarconsulta = (req, res) => {
    const data = req.body;
    consultas.push(data);
    res.status(201).send("Cadastrado Com Sucesso").end();
};

const excluirconsulta = async (req, res) => {
    const id = req.params.id;

    try {
        const remove = await db.query("DELETE FROM consulta WHERE id = ?", [id]);
        console.log(remove);
        res.status(200).end();
    } catch (error) {
        console.log(error);
        const err = { msg: "" };

        if (error.errno === 1451) {
            err.msg = "Usuário com registros de consulta não pode ser excluído";
        }

        res.json(err).status(500).end();
    }
};

const atualizarconsulta = async (req, res) => {
    const { data, hora, status, descricao, paciente_id, medico_id, especialidade_id } = req.body;
    const id = req.params.id;

    try {
        const update = await db.query(
            "UPDATE consulta SET  data = ?, hora = ?, status = ?, descricao = ?, paciente_id = ?, medico_id = ?, especialidade_id = ? WHERE id = ?",
            [data, hora, status, descricao, paciente_id, medico_id, especialidade_id, id]
        );

        const info = { msg: "" };

        if (update[0].affectedRows === 1) {
            info.msg = "Atualizado com sucesso";
        } else if (update[0].affectedRows === 0) {
            info.msg = "Consulta não encontrada";
        }

        res.status(200).json(info).end();
    } catch (error) {
        console.log(error);
        res.status(500).end();
    }
};
// NOVAS FUNÇÕES PEDIDAS -----------------------------

// 1. Histórico de consultas de um paciente
const historicoPorPaciente = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await db.query(
            "SELECT * FROM consulta WHERE paciente_id = ? ORDER BY data DESC, hora DESC",
            [id]
        );

        res.json(result[0]).end();

    } catch (error) {
        console.log(error);
        res.status(500).end();
    }
};


const agendaMedico = async (req, res) => {
    const { id, data } = req.params;

    try {
        const result = await db.query(
            "SELECT * FROM consulta WHERE medico_id = ? AND data = ? ORDER BY hora ASC",
            [id, data]
        );

        res.json(result[0]).end();

    } catch (error) {
        console.log(error);
        res.status(500).end();
    }
};


// 3. Listar consultas por especialidade
const consultasPorEspecialidade = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await db.query(
            "SELECT * FROM consulta WHERE especialidade_id = ?",
            [id]
        );

        res.json(result[0]).end();

    } catch (error) {
        console.log(error);
        res.status(500).end();
    }
};


module.exports = {
    listarconsultas,
    buscarconsulta,
    cadastrarconsulta,
    excluirconsulta,
    atualizarconsulta,
    historicoPorPaciente,
    agendaMedico,
    consultasPorEspecialidade
};

