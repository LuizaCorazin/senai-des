const db = require("../data/connection")

const listarreservas = async (req, res) => {
    const lista = await db.query("SELECT * FROM reservas");
    res.json(lista[0]).end();
}

const cadastrarreserva = async(req, res) => {
  const { hora, data_reservas, id_alunos, id_salas } = req.body;
  
  if (!hora || !data_reservas || !id_alunos || !id_salas) {
    return res.status(400).json({ error: "Todos os campos (hora, data_reservas, id_alunos, id_salas) são obrigatórios" });
  }
  
  try {
    await db.query("INSERT INTO reservas (hora, data_reservas, id_alunos, id_salas) VALUES (?, ?, ?, ?)", [hora, data_reservas, id_alunos, id_salas]);
    res.status(201).json({ message: "Reserva cadastrada com sucesso" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao cadastrar reserva" });
  }
}


const atualizarreserva = async (req, res) => {
    const { id, hora, data_reservas, id_alunos, id_salas } = req.body;
    
    if (!id || !hora || !data_reservas || !id_alunos || !id_salas) {
      return res.status(400).json({ error: "Todos os campos são obrigatórios" });
    }

    try {
        const update = await db.query("UPDATE reservas SET hora = ?, data_reservas = ?, id_alunos = ?, id_salas = ? WHERE id = ?", [hora, data_reservas, id_alunos, id_salas, id]);

        const info = { msg: "" };

        if (update[0].affectedRows === 1) {
            info.msg = "Reserva atualizada com sucesso";
        } else if (update[0].affectedRows === 0) {
            info.msg = "Reserva não encontrada";
        }

        res.status(200).json(info);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Erro ao atualizar reserva" });
    }
};


const excluirreserva = async (req, res) => {
    const id = req.params.id;

    try{
        const remove = await db.query("DELETE FROM reservas WHERE id = ?", [id]);

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
    listarreservas,
    cadastrarreserva,
    atualizarreserva,
    excluirreserva

}