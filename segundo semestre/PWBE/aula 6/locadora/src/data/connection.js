const mysql = require("mysql2/promise");

const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database:"locadora"

});

module.exports = connection;
/*
host -> endreço do banco de dados
user -> usuario do banco de dados
password -> senha do usuario
database -> base de dados
*/

/*
host -> endereço do banco de dados
user-> usuario do banco de dados
password -> senha do usuario
database -> base de dados
*/