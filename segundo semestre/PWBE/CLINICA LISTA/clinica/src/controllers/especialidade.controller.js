const db = require("../data/connection");

const especialidades = [];

// LISTAR TODAS
const listarespecialidades = async (req, res) => {
    try {
        const lista = await db.query("SELECT * FROM especialidade");
        res.json(lista[0]).end();
    } catch (error) {
        console.log(error);
        res.status(500).end();
    }
};

// BUSCAR POR ID
const buscarespecialidade = async (req, res) => {
    const id = req.params.id;

    try {
        const especialidade = await db.query(
            "SELECT * FROM especialidade WHERE id = ?",
            [id]
        );

        res.json(especialidade[0][0]).end();
    } catch (error) {
        console.log(error);
        res.status(500).end();
    }
};

// CADASTRAR
const cadastrarespecialidade = (req, res) => {
    const data = req.body;

    // Adiciona ao array de teste
    especialidades.push(data);

    res.status(201).send("Cadastrado com sucesso").end();
};

// EXCLUIR
const excluirespecialidade = async (req, res) => {
    const id = req.params.id;

    try {
        const remove = await db.query("DELETE FROM especialidade WHERE id = ?", [id]);

        res.status(200).json({ msg: "Removido com sucesso" }).end();
    } catch (error) {
        console.log(error);

        const err = { msg: "" };

        if (error.errno === 1451) {
            err.msg = "Registro não pode ser removido pois está vinculado a outra tabela";
        }

        res.status(500).json(err).end();
    }
};

// ATUALIZAR
const atualizarespecialidade = async (req, res) => {
    const { id, nome } = req.body;

    try {
        const update = await db.query(
            "UPDATE especialidade SET nome = ? WHERE id = ?",
            [nome, id]
        );

        const info = { msg: "" };

        if (update[0].affectedRows === 1) {
            info.msg = "Atualizado com sucesso";
        } else {
            info.msg = "Especialidade não encontrada";
        }

        res.status(200).json(info).end();
    } catch (error) {
        console.log(error);
        res.status(500).end();
    }
};

module.exports = {
    listarespecialidades,
    buscarespecialidade,
    cadastrarespecialidade,
    excluirespecialidade,
    atualizarespecialidade
};
