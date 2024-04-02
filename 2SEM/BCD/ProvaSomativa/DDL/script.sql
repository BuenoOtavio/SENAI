drop database if exists alugCarros;

create database alugCarros CHARSET=UTF8 COLLATE utf8_general_ci;

use alugCarros;

create table veiculos(
    placa varchar(10) not null primary key,
    modelo varchar(20) not null,
    marca varchar(20) not null,
    tipo varchar(20) not null,
    diaria decimal(5,2) not null
);

create table clientes(
    cpf varchar(11) not null primary key,
    nome varchar(40) not null,
    telefone text not null
);

create table reserva(
    id int not null primary key,
    reserva date not null,
    retirada date,
    devolucao date,
    dias int not null,
    istatus text not null,
    subTotal decimal(7,2),
    veiculo varchar(10) not null,
    cliente varchar(11) not null,
    FOREIGN KEY (veiculo) REFERENCES veiculos(placa),
    foreign key (cliente) references clientes(cpf)
);