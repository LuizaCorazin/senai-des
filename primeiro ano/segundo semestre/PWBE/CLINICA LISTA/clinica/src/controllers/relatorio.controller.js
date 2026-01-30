const db = require("../data/connection");

// Relatório de consultas por paciente
const consultasPorPaciente = async (req, res) => {
    try {
        const paciente_id = req.params.id;
        const consultas = await db.query("SELECT * FROM consulta WHERE paciente_id = ?", [paciente_id]);
        res.json(consultas[0]).end();
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Erro ao buscar consultas do paciente" }).end();
    }
};

// Relatório de consultas por médico e data
const consultasPorMedicoData = async (req, res) => {
    try {
        const { medico_id, data } = req.query;
        const consultas = await db.query("SELECT * FROM consulta WHERE medico_id = ? AND data = ?", [medico_id, data]);
        res.json(consultas[0]).end();
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Erro ao buscar consultas" }).end();
    }
};

// Relatório de consultas por especialidade
const consultasPorEspecialidade = async (req, res) => {
    try {
        const especialidade_id = req.params.id;
        const consultas = await db.query("SELECT * FROM consulta WHERE especialidade_id = ?", [especialidade_id]);
        res.json(consultas[0]).end();
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Erro ao buscar consultas da especialidade" }).end();
    }
};

// Relatório: Total de pacientes por médico
const totalPacientesPorMedico = async (req, res) => {
    try {
        const resultado = await db.query("SELECT medico_id, COUNT(DISTINCT paciente_id) AS total_pacientes FROM consulta GROUP BY medico_id");
        res.json(resultado[0]).end();
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Erro ao buscar total de pacientes por médico" }).end();
    }
};

// Relatório detalhado: Médicos, especialidades e total de pacientes
const relatorioDetalhado = async (req, res) => {
    try {
        const resultado = await db.query(`
            SELECT 
                m.id AS medico_id,
                m.nome AS nome_medico,
                e.nome AS especialidade,
                COUNT(DISTINCT c.paciente_id) AS total_pacientes
            FROM consulta c
            INNER JOIN medico m ON c.medico_id = m.id
            INNER JOIN especialidade e ON m.especialidade_id = e.id
            GROUP BY m.id, m.nome, e.nome
        `);
        res.json(resultado[0]).end();
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Erro ao gerar relatório detalhado" }).end();
    }
};

module.exports = {
    consultasPorPaciente,
    consultasPorMedicoData,
    consultasPorEspecialidade,
    totalPacientesPorMedico,
    relatorioDetalhado
};
