const db = require("../data/connection")

const reservasalas = async (req, res) => {
    try {
        const lista = await db.query(`
        SELECT salas.nome AS Sala, COUNT(reservas.id) AS Total_Reservas
        FROM reservas
        JOIN salas ON reservas.id_salas = salas.id
        GROUP BY salas.id
        `);
        res.json(lista[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erro ao gerar relatório" });
    }
}

const reservasalunos = async (req, res) => {
    try {
        const lista = await db.query(`
        SELECT alunos.nome AS Aluno, COUNT(reservas.id) AS Total_Reservas
        FROM reservas
        JOIN alunos ON reservas.id_alunos = alunos.id
        GROUP BY alunos.id
        `);
        res.json(lista[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erro ao gerar relatório" });
    }
}

module.exports = {
    reservasalas,
    reservasalunos
}
