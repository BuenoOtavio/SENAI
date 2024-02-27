drop database if exists Transportadora;

create database Transportadora CHARSET=UTF8 COLLATE utf8_general_ci;

use Transportadora;

create table Cliente(
    idCliente integer primary key auto_increment,
    nome varchar(50) not null,
    endereco varchar(50) not null,
    telefone varchar(15) not null,
    email varchar(50) not null
);

create table Funcionario(
    idFuncionario integer primary key auto_increment,
    nome varchar(50) not null,
    cargo varchar(50) not null,
    salario decimal(10,2) not null
)

create table Veiculo(
    idVeiculo integer primary key auto_increment,
    placa varchar(50) not null,
    modelo varchar(50) not null,
    capacidade varchar(50) not null,
)

create table Rota(
    idRota integer primary key auto_increment,
    origem varchar(50) null null,
    destino varchar(50) not null,
    distancia varchar(50) not null
)

create table Entrega(
     idEntrega integer primary key auto_increment,
     inicio varchar(50) null null,
     fim varchar(50) null null,
     istatus varchar(50) null null
)

create table Pedido(
    idPedido integer primary key auto_increment,
    dataPedido date,
    idEntrega integer not null,
    idCliente integer not null, 
    foreign key(idEntrega) references Entrega(idEntrega), 
    foreign key(idCliente) references Cliente(idCliente),
    valor decimal(5,2) not null,
    istatus varchar(50) not null
)