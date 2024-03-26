drop database if exists empresa;

create database empresa CHARSET=UTF8 COLLATE utf8_general_ci;

use empresa;

create table veiculos(
    placa varchar(10) not null primary key,
    modelo varchar(20) not null,
    marca varchar(20) not null,
    ano int not null
);

create table funcionario(
    matricula int not null primary key,
    nome varchar(20) not null,
    telefone text not null
);

create table manutencao(
    idManutencao int not null primary key auto_increment,
    inicioManutencao date not null,
    fimManutencao date not null,
    descricao text not null,
    placaVeiculo varchar(10) not null,
    matriculaFuncionario int not null,
    FOREIGN KEY (placaVeiculo) REFERENCES veiculos(placa),
    FOREIGN KEY (matriculaFuncionario) REFERENCES funcionario(matricula)
);

