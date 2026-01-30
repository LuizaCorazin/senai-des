const db = require("../data/connection")

const listaralunos = async (req, res) => {
    const lista = await db.query("SELECT * FROM alunos");
    res.json(lista[0]).end();
}

const cadastraraluno = async(req, res) => {
  const { id, nome, turma } = req.body;
  
  if (!id || !nome || !turma) {
    return res.status(400).json({ error: "Todos os campos (id, nome, turma) são obrigatórios" });
  }
  
  try {
    await db.query("INSERT INTO alunos (id, nome, turma) VALUES (?, ?, ?)", [id, nome, turma]);
    res.status(201).json({ message: "Aluno cadastrado com sucesso" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao cadastrar aluno" });
  }
}


const atualizaraluno = async (req, res) => {
    const {id, nome , turma} = req.body;
    
    if (!id || !nome || !turma) {
      return res.status(400).json({ error: "Todos os campos são obrigatórios" });
    }

    try {
        const update = await db.query("UPDATE alunos SET nome = ?, turma = ? WHERE id = ?", [nome, turma, id]);

        const info = { msg : "" };

        if(update[0].affectedRows === 1) {
            info.msg = "Aluno atualizado com sucesso";
        }else if(update[0].affectedRows === 0){
            info.msg = "Aluno não encontrado";
        }
       
        res.status(200).json(info);

    }catch (error){
        console.log(error);
        res.status(500).json({ msg: "Erro ao atualizar" });
    }
};


const excluiraluno = async (req, res) => {
    const id = req.params.id;

    try{
        const remove = await db.query("DELETE FROM alunos WHERE id = ?", [id]);

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



module.exports = {
    listaralunos,
    cadastraraluno,
    atualizaraluno,
    excluiraluno

}