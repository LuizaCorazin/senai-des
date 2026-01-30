const db = require("../data/connection")

const pacientes = [];

const listarpacientes = async (req, res) => {
    const lista = await db.query("SELECT * FROM paciente");
    res.json(lista[0]).end();
}

const buscarpaciente = async (req, res) => {
    const idpaciente = req.params.id;
    const paciente = await db.query("SELECT * FROM paciente WHERE id =" + idpaciente);
    res.json(paciente[0][0]).end();
}


const cadastrarpaciente = (req, res) => {
  const data = req.body;
  pacientes.push(data);
  res.status(201).send("Cadastrado Com Sucesso").end();
}



const excluirpaciente = async (req, res) => {
    const id = req.params.id;

    try{
        const remove = await db.query("DELETE FROM paciente WHERE id = ?", [id]);

        console.log(remove);

        res.status(200).end();
    } catch(error){
        console.log(error);

        const err = { msg : ""};

        if(error.errno === 1451){
            err.msg = "Usuario com  registrada";
        }

        res.json(err).status(500).end();
    }
};

const atualizarpaciente = async (req, res) => {
    const {id, nome , email} = req.body;

    try {
        const update = await db.query("UPDATE paciente SET nome = ?, email = ? where id = ?", [nome, email, id]);

        const info = { msg : "" };

        if(update[0].affectedRows === 1) {
            info.msg = "Atulizado com sucesso";
        }else if(update[0].affectedRows === 0){
            info.msg = "Usuario não encontrado";
        }
       
        res.status(200).json(info).end();

    }catch (error){
        console.log(error);

        res.status(500).end();
    }
};



module.exports = {
    listarpacientes,
    buscarpaciente,
    cadastrarpaciente,
    excluirpaciente,
    atualizarpaciente
}