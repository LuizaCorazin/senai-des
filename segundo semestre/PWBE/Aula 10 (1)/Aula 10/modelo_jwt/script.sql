
DROP DATABASE IF EXISTS hospital;
CREATE DATABASE hospital;

use hospital;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(100) NOT NULL,
    cargo VARCHAR(50) NOT NULL
);

CREATE TABLE especialidade (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE doctor (
    id INT AUTO_INCREMENT PRIMARY KEY,
    especialidade_id INTEGER NOT NULL,
    user_id INTEGER,
    FOREIGN KEY (especialidade_id) REFERENCES especialidade(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE pacientes(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    telefone VARCHAR(50) NOT NULL
);

CREATE TABLE consultas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    data VARCHAR(20),
    status VARCHAR(50),
    descrição VARCHAR(100),
    paciente_id INTEGER,
    medico_id INTEGER,
    FOREIGN KEY (paciente_id) REFERENCES users(id),
    FOREIGN KEY (medico_id) REFERENCES doctor(id)
);