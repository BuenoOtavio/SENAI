drop database if exists gerenciamento;
create database gerenciamento CHARSET=UTF8 COLLATE utf8_general_ci;
use gerenciamento;

CREATE TABLE usuarios (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT ,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    senha VARCHAR(255) NOT NULL 
);

CREATE TABLE tarefas (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    descricao TEXT NOT NULL,
    dataVencimento DATE NOT NULL,
    estatus VARCHAR(20) NOT NULL,
    idUsuario INT NOT NULL,
    idAtribuidor INT NOT NULL,
    FOREIGN KEY (idUsuario) REFERENCES Usuarios(id),
    FOREIGN KEY (idUsuario) REFERENCES Usuarios(id)
);
