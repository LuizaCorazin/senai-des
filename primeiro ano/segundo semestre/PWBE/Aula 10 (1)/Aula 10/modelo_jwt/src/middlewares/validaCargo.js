const validaAdm = (req, res, next) => {
    const usuario = req.headers['user'];

    if (usuario.cargo.toLowerCase() === 'administrador') {
        next();
    }else{
        res.status(401).json({
            msg: "usuario sem permissao"
        }).end();
    }
    
};

const validaAtendente= (req, res, next) => {
    const usuario = req.headers['user'];

    if (usuario.cargo.toLowerCase() === 'atendente'|| usuario.cargo.toLowerCase() === 'administrador') {
        next();
    }else{
        res.status(401).json({
            msg: "usuario sem permissao"
        }).end();
    }
    
};

const validaMedicos= (req, res, next) => {
    const usuario = req.headers['user'];

    if (usuario.cargo.toLowerCase() === 'medico'|| usuario.cargo.toLowerCase() === 'administrador') {
        next();
    }else{
        res.status(401).json({
            msg: "usuario sem permissao"
        }).end();
    }
    
};



module.exports = {
    validaAdm,
    validaMedicos,
    validaAtendente
}