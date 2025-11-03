const e = require("cors");
const livros = require("../data/livros.data");


const listar = (req, res) => {
    res.send(livros).end();
};

const buscar = (req, res) => {
    const id = req.params.id;

    var user = "";

    livros.forEach((livro, index) => {
        if(livro.id === id){
            user = livro;
        }
    });

    if(user === "") user = "Nao Encontrado";

    res.send(user).end();
};

const cadastrar = (req, res) => {
    const data = req.body;
    livros.push(data);
    res.status(201).send("Cadastrado com Sucesso").end();
};

const apagar = (req, res) => {
    const id = req.params.id;
    var indice = -1;
    livros.forEach((livro, index) =>{
        if(livro.id === id){
            indice = index;
        }
    });

    if(indice === -1){
        res.status(404).end();
    }else {
        livros.splice(indice, 1);
        res.status(200).end();
    }
};

const atualizar = (req, res) => {
    const user = req.body;

    var encontrei = false;

    livros.forEach((livro, index) => {
        if(livro.id === user.id){
            livros[index] = user;
            encontrei = true;
        }
    });

    if(encontrei == false) {
        res.status(404).end();
    }else {
        res.status(201).end();
    }
};

const alterar = (req, res) => {
    const id = req.params.id;
    const userUpdate = req.body;

    var indice = -1;
    livros.forEach((livro, index) => {
        if(livro.id === id){
            indice = index;
        }
    });

    if(indice  === -1) {
        res.status(404).end();
    }else {
        Object.keys(userUpdate).forEach((chave) => {
            livros[indice][chave] = userUpdate[chave];
        });

        res.status(200).end();
    }
};

module.exports = {
    listar,
    buscar,
    cadastrar,
    apagar,
    atualizar,
    alterar
};