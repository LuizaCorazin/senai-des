DROP DATABASE IF EXISTS clinica; 
CREATE DATABASE clinica;
USE clinica;

CREATE TABLE especialidade (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE medico (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    telefone VARCHAR(50),
    especialidade_id INT NOT NULL,
    FOREIGN KEY (especialidade_id) REFERENCES especialidade(id)
);

CREATE TABLE paciente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    telefone VARCHAR(50) NOT NULL
);

CREATE TABLE consulta (
    id INT AUTO_INCREMENT PRIMARY KEY,
    data DATE NOT NULL,
    hora TIME NOT NULL,
    status VARCHAR(50),
    descricao VARCHAR(255),
    paciente_id INT NOT NULL,
    medico_id INT NOT NULL,
    especialidade_id INT NOT NULL,
    FOREIGN KEY (paciente_id) REFERENCES paciente(id),
    FOREIGN KEY (medico_id) REFERENCES medico(id),
    FOREIGN KEY (especialidade_id) REFERENCES especialidade(id)
);

INSERT INTO especialidade VALUES 
(1, 'Cardiologia'),
(2, 'Dermatologia'),
(3, 'Pediatria'),
(4, 'Ortopedia'),
(5, 'Ginecologia');

INSERT INTO medico VALUES 
(11, 'Dra. Clara Antonacci', 'claraepig@clinica.com', '(11) 99999-1111', 1),
(12, 'Dra. Beatriz Albuquerque', 'beaefranc@clinica.com', '(11) 99999-2222', 2),
(13, 'Dra. Pietra Fernandes', 'pietraeju@clinica.com', '(11) 99999-3333', 3),
(14, 'Dra. Julia Novo', 'juliaeclara@clinica.com', '(11) 99999-4444', 4),
(15, 'Dra. Luiza Corazin', 'corazin@clinica.com', '(11) 99999-5555', 5);

INSERT INTO paciente VALUES
(21, 'Afonsinha', 'aufonsinha@gmail.com', '(11) 98888-1111'),
(22, 'Ygona Moura', 'ygona@gmail.com', '(11) 98888-2222'),
(23, 'Mari Maria', 'marimaria@gmail.com', '(11) 98888-3333'),
(24, 'Davi Brito', 'davibrito@gmail.com', '(11) 98888-4444'),
(25, 'Justin Bieber', 'justin@gmail.com', '(11) 98888-5555'),
(26, 'Lady Gaga', 'dontcallmegaga@gmail.com', '(11) 98888-6666'),
(27, 'Ariana Pequena', 'pequenaariana@gmail.com', '(11) 98888-7777'),
(28, 'Patixa Telo', 'patixa telo@gmail.com', '(11) 98888-8888'),
(29, 'Minichurros Alexandre de Moraes', 'minialexandro@gmail.com', '(11) 98888-9999'),
(30, 'Kim Kardashian', 'kkwbeauty@gmail.com', '(11) 97777-0000');

INSERT INTO consulta VALUES
(31, '2025-11-10', '09:00:00', 'Agendada', 'Consulta de rotina', 21, 11, 1),
(32, '2025-11-10', '10:00:00', 'Agendada', 'Revisão de exames', 22, 12, 2),
(33, '2025-11-11', '14:00:00', 'Concluída', 'Acompanhamento pediátrico', 23, 13, 3),
(34, '2025-11-12', '08:30:00', 'Agendada', 'Dor no joelho', 24, 14, 4),
(35, '2025-11-12', '11:00:00', 'Cancelada', 'Retorno ginecológico', 25, 15, 5);

SELECT * FROM consulta WHERE paciente_id = 21;

SELECT * FROM consulta WHERE medico_id = 11 AND data = '2025-11-10';

SELECT * FROM consulta WHERE especialidade_id = 1;

SELECT 
    m.id AS medico_id,
    m.nome AS nome_medico,
    COUNT(c.paciente_id) AS total_pacientes
FROM 
    consulta c
INNER JOIN 
    medico m ON c.medico_id = m.id
GROUP BY 
    m.id, m.nome;
