drop database if exists gerenciamento;
create database gerenciamento CHARSET=UTF8 COLLATE utf8_general_ci;
use gerenciamento;

CREATE TABLE Usuarios (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT ,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    senha VARCHAR(255) NOT NULL -- Supondo que você usará um algoritmo de hash criptográfico para armazenar senhas
);

CREATE TABLE Tarefas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    descricao TEXT NOT NULL,
    dataVencimento DATE NOT NULL,
    estatus VARCHAR(20) NOT NULL,
    idUsuario INT NOT NULL,
    FOREIGN KEY (idUsuario) REFERENCES Usuarios(id)
);

-- Inserindo valores na tabela Usuarios
INSERT INTO Usuarios (nome, email, senha) VALUES
('João', 'joao@email.com', 'senha123'),
('Maria', 'maria@email.com', 'abc123'),
('Pedro', 'pedro@email.com', 'senha456');

-- Inserindo valores na tabela Tarefas
INSERT INTO Tarefas (descricao, dataVencimento, estatus, idUsuario) VALUES
('Fazer relatório mensal', '2024-03-25', 'A fazer', 1),
('Preparar apresentação', '2024-04-10', 'Em andamento', 2),
('Revisar documento', '2024-03-22', 'Concluído', 3),
('Agendar reunião', '2024-03-28', 'A fazer', 1);


describe  Usuarios;

describe Tarefas;

select * from Usuarios;

select * from  Tarefas;
