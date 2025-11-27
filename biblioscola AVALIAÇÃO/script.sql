DROP DATABASE IF EXISTS biblioscola; 
CREATE DATABASE biblioscola;
USE biblioscola;


CREATE TABLE alunos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    turma VARCHAR(3) NOT NULL
);


CREATE TABLE salas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    capacidade VARCHAR(3) NOT NULL
);


CREATE TABLE reservas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    hora TIME NOT NULL,
    data_reservas DATE NOT NULL,
    id_alunos INT NOT NULL,
    id_salas INT NOT NULL,
    FOREIGN KEY (id_salas) REFERENCES salas(id),
    FOREIGN KEY (id_alunos) REFERENCES alunos(id)
);


use biblioscola;

INSERT INTO alunos VALUES (1, 'Luiza', '2A');

INSERT INTO alunos VALUES (2, 'Clara', '2A');

INSERT INTO alunos VALUES (3, 'Julia', '2A');

INSERT INTO alunos VALUES (4, 'Marcao', '3A');

INSERT INTO alunos VALUES (5, 'Cloneusa', '2B');

use biblioscola;

INSERT INTO salas VALUES (21,'informatica', 30);

INSERT INTO salas VALUES (22,'biblioteca', 30);

INSERT INTO salas VALUES (23,'sala de reuniao', 30);

INSERT INTO salas VALUES (20,'laboratorio 3', 30);

INSERT INTO salas VALUES (19,'sala do senai', 30);

use biblioscola;

INSERT INTO reservas VALUES (12,'11:30', '2025-07-11', 1, 21);

INSERT INTO reservas VALUES (13,'07:20', '2025-07-09', 3, 21);

INSERT INTO reservas VALUES (10,'09:10', '2025-03-12', 5, 23);

INSERT INTO reservas VALUES (11,'10:00', '2025-09-10', 2, 21);














