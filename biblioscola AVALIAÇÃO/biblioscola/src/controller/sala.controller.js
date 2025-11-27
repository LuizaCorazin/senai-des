const db = require("../data/connection")

const listarsalas = async (req, res) => {
    const lista = await db.query("SELECT * FROM salas");
    res.json(lista[0]).end();
}

const cadastrarsala = async(req, res) => {
  const { id, nome, capacidade } = req.body;
  
  if (!id || !nome || !capacidade) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios" });
  }
  
  try {
    await db.query("INSERT INTO salas (id, nome, capacidade) VALUES (?, ?, ?)", [id, nome, capacidade]);
    res.status(201).json({ message: "Sala cadastrada com sucesso" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao cadastrar sala" });
  }
}


const atualizarsala = async (req, res) => {
    const {id, nome , capacidade} = req.body;
    
    if (!id || !nome || !capacidade) {
      return res.status(400).json({ error: "Todos os campos (id, nome, capacidade) são obrigatórios" });
    }

    try {
        const update = await db.query("UPDATE salas SET nome = ?, capacidade = ? WHERE id = ?", [nome, capacidade, id]);

        const info = { msg : "" };

        if(update[0].affectedRows === 1) {
            info.msg = "Sala atualizada com sucesso";
        }else if(update[0].affectedRows === 0){
            info.msg = "Sala não encontrada";
        }
       
        res.status(200).json(info);

    }catch (error){
        console.log(error);
        res.status(500).json({ msg: "Erro ao atualizar" });
    }
};


const excluirsala = async (req, res) => {
    const { id } = req.params;

    try {
        const remove = await db.query("DELETE FROM salas WHERE id = ?", [id]);

        const info = { msg: "" };

        if (remove[0].affectedRows === 1) {
            info.msg = "Sala excluída com sucesso";
        } else if (remove[0].affectedRows === 0) {
            info.msg = "Sala não encontrada";
        }

        res.status(200).json(info);
    } catch (error) {
        console.log(error);

        const err = { msg: "" };

        if (error.errno === 1451) {
            err.msg = "Sala possui registros associados";
        } else {
            err.msg = "Erro ao excluir sala";
        }

        res.status(500).json(err);
    }
};



module.exports = {
    listarsalas,
    cadastrarsala,
    atualizarsala,
    excluirsala

}