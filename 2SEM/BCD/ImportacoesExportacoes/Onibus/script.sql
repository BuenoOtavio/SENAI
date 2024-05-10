DROP DATABASE IF EXISTS Onibus;
CREATE DATABASE Onibus CHARSET=UTF8 COLLATE utf8_general_ci;
USE Onibus;

-- Tabela para armazenar informações dos motoristas
CREATE TABLE Motorista (
    CPF CHAR(14) PRIMARY KEY,
    Nome_motorista VARCHAR(100)
);

-- Tabela para armazenar informações das linhas
CREATE TABLE Linha (
    ID_Linha VARCHAR(10) PRIMARY KEY,
    Descricao_linha VARCHAR(100)
);

-- Tabela para armazenar informações dos horários
CREATE TABLE Horario (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    ID_Linha VARCHAR(10),
    Horario TIME,
    FOREIGN KEY (ID_Linha) REFERENCES Linha(ID_Linha)
);

-- Tabela para armazenar informações dos números de telefone
CREATE TABLE Telefone (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    CPF CHAR(14),
    Numero VARCHAR(20),
    FOREIGN KEY (CPF) REFERENCES Motorista(CPF)
);

-- Tabela para armazenar informações sobre quem dirige cada linha
CREATE TABLE Dirige (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    CPF CHAR(14),
    ID_Linha VARCHAR(10),
    FOREIGN KEY (CPF) REFERENCES Motorista(CPF),
    FOREIGN KEY (ID_Linha) REFERENCES Linha(ID_Linha)
);
