const db = require("../data/connection");
const jsonwebtoken = require("jsonwebtoken");
const crypto = require('node:crypto');


const Login = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const senhahash = crypto.createHash('MD5').update(senha).digest('hex').toString();
        const usuario = await db.query("SELECT * FROM users WHERE email = ? AND senha = ?", [email, senhahash]);

        if (usuario[0].length === 0) {
            return res.status(401).send({ message: 'E-mail or Password incorrect!' });
        }

        const token = jsonwebtoken.sign(
            {
                id: usuario[0][0].id,
                nome: usuario[0][0].nome,
                cargo: usuario[0][0].cargo
            },
            process.env.SECRET_JWT,
            { expiresIn: "60min" }
        );

        res.status(200).json({ token: token });

    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Internal server error' });
    }
};

module.exports = {
    Login
}