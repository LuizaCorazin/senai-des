const db = require("../data/connection")

const medicos = [];

const listarmedicos = async (req, res) => {
    const lista = await db.query("SELECT * FROM medico");
    res.json(lista[0]).end();
}

const buscarmedico = async (req, res) => {
    const idmedico = req.params.id;
    const medico = await db.query("SELECT * FROM medico WHERE id =" + idmedico);
    res.json(medico[0][0]).end();
}

const cadastrarmedico = (req, res) => {
  const data = req.body;
  medicos.push(data);
  res.status(201).send("Cadastrado Com Sucesso").end();
}


const excluirmedico = async (req, res) => {
    const id = req.params.id;

    try{
        const remove = await db.query("DELETE FROM medico WHERE id = ?", [id]);

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

const atualizarmedico = async (req, res) => {
    const {id, nome , email} = req.body;

    try {
        const update = await db.query("UPDATE medico SET nome = ?, email = ? where id = ?", [nome, email, id]);

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


const consultasPorData = async (req, res) => {
    const { id_medico, data } = req.body;

    try {
        const consultas = await db.query("", [id_medico, data]);

        
    }catch (error) {
        console.log(error);
        res.status(500).json(error).end();
    }
};

module.exports = {
    listarmedicos,
    buscarmedico,
    cadastrarmedico,
    excluirmedico,
    atualizarmedico
}