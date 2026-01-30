const e = require("express");
const db = require("../data/connection");
const jsonwebtoken = require("jsonwebtoken");
const crypto = require('node:crypto');
const { stat } = require("node:fs");

const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha, cargo } = req.body;

    try {
        const senhahash = crypto.createHash('MD5').update(senha).digest('hex').toString();

        const resultado = await db.query("INSERT INTO users VALUES (DEFAULT, ?, ?, ?, ?)", [nome, email, senhahash, cargo]);

        const novoUsuario = {
            id: resultado[0].insertId,
            nome: nome,
            email: email,
            senha: senhahash,
            cargo: cargo
        };

        res.status(201).json(novoUsuario).end();
    } catch (error) {
        res.status(500).json(error).end();
    }
};

const cadastrarPaciente = async (req, res) => {
    const { nome, email, telefone } = req.body;
    try {
        const resultado = await db.query("INSERT INTO pacientes VALUES (DEFAULT, ?, ?, ?)", [nome, email, telefone]);
        const novoPaciente = {
            id: resultado[0].insertId,
            nome: nome,
            email: email,
            telefone: telefone,

        };
        res.status(201).json(novoPaciente).end();
    } catch (error) {
        res.status(500).json(error).end();
    }
};

const cadastrarMedico = async (req, res) => {
    const { especialidade_id, user_id } = req.body;
    try {
        const resultado = await db.query("INSERT INTO doctor VALUES (DEFAULT, ?, ?)", [especialidade_id, user_id]);
        const novoMedico = {
            id: resultado[0].insertId,
            especialidade_id: especialidade_id,
            user_id: user_id
        };
        res.status(201).json(novoMedico).end();
    } catch (error) {
        res.status(500).json(error).end();
    }
};

const cadastrarConsultas = async (req, res) => {
    const { data, status, descrição, paciente_id, medico_id } = req.body;

    const valida = await db.query("SELECT * FROM consultas WHERE data = ? AND paciente_id = ? AND medico_id", [data, paciente_id, medico_id]);

    if (valida[0].length > 0) {
        return res.status(400).json({ msg: "Consulta ja cadastrada" }).end();
    } else {
        try {
            const resultado = await db.query("INSERT INTO consultas VALUES (DEFAULT, ?, ?, ?, ?, ?)", [data, status, descrição, paciente_id, medico_id]);
            const novaConsulta = {
                id: resultado[0].insertId,
                data: data,
                status: status,
                descrição: descrição,
                paciente_id: paciente_id,
                medico_id: medico_id
            };
            res.status(201).json(novaConsulta).end();

        } catch (error) {
            console.log(error);
            res.status(500).json(error).end();
        }
    }
};

const cadastrarEspecialidade = async (req, res) => {
    const { nome } = req.body;
    try {
        const resultado = await db.query("INSERT INTO especialidade VALUES (DEFAULT, ?)", [nome]);
        const novaEspecialidade = { 
            id: resultado[0].insertId,
            nome: nome
        };
        res.status(201).json(novaEspecialidade).end();
    } catch (error) {
        res.status(500).json(error).end();
    }       
};

const AtualizarConsulta = async (req, res) => {
    const { id } = req.params.id;
    const { data, status, descrição, paciente_id, medico_id, } = req.body;
    try {
        const resultado = await db.query("UPDATE consultas SET  data = ?, status = ?, descrição = ?, paciente_id = ?,medico_id = ? WHERE id = ?", [data, status, descrição, medico_id, paciente_id, id]);

        res.status(204).json(resultado).end();
    } catch (error) {
        res.status(500).json(error).end();
    }
};

const listarRelatorios = async (req, res) => {
    const lista = await db.query("SELECT * FROM consultas");
    res.json(lista[0]).end();
};

const listarPormedico = async (req, res) => {
    const { medico_id } = req.params;
    const lista = await db.query("SELECT * FROM consultas WHERE medico_id = ?", [medico_id]);
    res.json(lista[0]).end();
};

const consultasPorespecialidade = async (req, res) => {
    const { id } = req.params;
    const lista = await db.query("SELECT * FROM especialidade WHERE id = ?", [id]);
    res.json(lista[0]).end();
};

const verDadosPaciente = async (req, res) => {
    const { paciente_id } = req.params;
    const dados = await db.query("SELECT * FROM  pacientes WHERE id = ?", [paciente_id]);
    res.json(dados[0]).end();
};

const excluirPaciente = async (req, res) => {
    const { paciente_id } = req.params;
    try {
        const resultado = await db.query("DELETE FROM pacientes WHERE id = ?", [paciente_id]);
        res.status(204).json(resultado).end();
    } catch (error) {
        res.status(500).json(error).end();
    }
};

const excluirMedico = async (req, res) => {
    const { medico_id } = req.params;
    try {
        const resultado = await db.query("DELETE FROM doctor WHERE id = ?", [medico_id]);
        res.status(204).json(resultado).end();
    } catch (error) {
        res.status(500).json(error).end();
    }
};

const excluirConsulta = async (req, res) => {
    const { consulta_id } = req.params;
    try {
        const resultado = await db.query("DELETE FROM consultas WHERE id = ?", [consulta_id]);
        res.status(204).json(resultado).end();
    }
    catch (error) {
        res.status(500).json(error).end();
    }
};

module.exports = {
    cadastrarUsuario,
    cadastrarMedico,
    cadastrarConsultas,
    cadastrarEspecialidade,
    AtualizarConsulta,
    listarRelatorios,
    consultasPorespecialidade,
    listarPormedico,
    verDadosPaciente,
    cadastrarPaciente,
    excluirPaciente,
    excluirMedico,
    excluirConsulta
}