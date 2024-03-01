drop database if exists transportadora;
create database transportadora CHARSET=UTF8 COLLATE utf8_general_ci;
use transportadora;

-- DDL - CREATE
create table Cliente(
    idCliente int not null primary key auto_increment,
    nome varchar(100) not null,
    endereco varchar(100) not null,
    telefone varchar(15) not null,
    email varchar(100) not null
);
create table Funcionario(
    idFuncionario int not null primary key auto_increment,
    nome varchar(100) not null default("Motorista"),
    cargo varchar(30) not null,
    salario float(10,2) not null
);
create table Rota(
    idRota int not null primary key auto_increment,
    origem varchar(100) not null,
    destino varchar(100) not null,
    distancia float(10,2)
);
create table Veiculo(
    placa varchar(10) not null primary key,
    modelo varchar(20) not null,
    capacidade float(10,2)
);

create table Entrega(
    idEntrega int not null primary key auto_increment,
    placa varchar(10) not null,
    motorista int not null,
    idRota int not null,
    inicio datetime,
    fim datetime,
    status varchar(20),
    foreign key (placa) references Veiculo(placa),
    foreign key (motorista) references Funcionario(idFuncionario),
    foreign key (idRota) references Rota(idRota)
);

create table pedido(
    idPedido int not null primary key auto_increment,
    idCliente int not null,
    idEntrega int not null,
    dataPedido timestamp not null,
    valor float(50,2) not null,
    foreign key (idCliente) references Cliente(idCliente),
    foreign key (idEntrega) references Entrega(idEntrega)
);

-- Inserir dados para Cliente
insert into Cliente (nome, endereco, telefone, email) values
('João Silva', 'Rua A, 123', '111-1111', 'joao.silva@email.com'),
('Maria Oliveira', 'Av. B, 456', '222-2222', 'maria.oliveira@email.com'),
('Carlos Santos', 'Rua C, 789', '333-3333', 'carlos.santos@email.com'),
('Ana Lima', 'Av. D, 1011', '444-4444', 'ana.lima@email.com'),
('Pedro Souza', 'Rua E, 1213', '555-5555', 'pedro.souza@email.com');

-- Inserir dados para Funcionario
insert into Funcionario (nome, cargo, salario) values
('José Pereira', 'Motorista', 3500.00),
('Fernanda Costa', 'Motorista', 3700.00),
('Mariana Oliveira', 'Atendente', 2800.00);

-- Inserir dados para Rota
insert into Rota (origem, destino, distancia) values
('São Paulo', 'Rio de Janeiro', 400.50),
('Belo Horizonte', 'Brasília', 600.75),
('Curitiba', 'Florianópolis', 250.25);

-- Inserir dados para Veiculo
insert into Veiculo (placa, modelo, capacidade) values
('ABC123', 'Fiorino', 1500.00),
('XYZ789', 'HR', 2000.00),
('123ABC', 'Ducato', 1800.00);

-- Inserir dados para Entrega
insert into Entrega (placa, motorista, idRota, inicio, fim, status) values
('ABC123', 1, 1, '2024-02-28 08:00:00', '2024-02-28 12:00:00', 'Concluído'),
('XYZ789', 2, 2, '2024-02-28 09:30:00', '2024-02-28 14:00:00', 'Em Progresso'),
('123ABC', 1, 3, '2024-02-28 11:00:00', '2024-02-28 16:30:00', 'Pendente'),
('ABC123', 2, 2, '2024-02-28 14:00:00', '2024-02-28 18:00:00', 'Concluído'),
('XYZ789', 1, 1, '2024-02-28 10:00:00', '2024-02-28 14:30:00', 'Em Progresso'),
('123ABC', 2, 3, '2024-02-28 13:30:00', '2024-02-28 17:30:00', 'Pendente'),
('ABC123', 1, 1, '2024-02-28 16:00:00', '2024-02-28 20:00:00', 'Concluído'),
('XYZ789', 2, 2, '2024-02-28 12:30:00', '2024-02-28 17:00:00', 'Em Progresso'),
('123ABC', 1, 3, '2024-02-28 15:00:00', '2024-02-28 19:00:00', 'Pendente'),
('ABC123', 2, 1, '2024-02-28 18:30:00', '2024-02-28 22:30:00', 'Concluído');

-- Inserir dados para Pedido (associado a Entrega)
insert into Pedido (idCliente, idEntrega, dataPedido, valor) values
(1, 1, '2024-02-28 14:30:00', 180.00),
(2, 2, '2024-02-28 11:00:00', 250.50),
(3, 3, '2024-02-28 16:45:00', 350.75),
(4, 4, '2024-02-28 19:00:00', 120.00),
(5, 5, '2024-02-28 15:30:00', 180.00),
(1, 6, '2024-02-28 18:45:00', 220.25),
(2, 7, '2024-02-28 20:00:00', 180.00),
(3, 8, '2024-02-28 21:15:00', 320.50),
(4, 9, '2024-02-28 22:30:00', 100.00),
(5, 10, '2024-02-28 23:45:00', 220.00),
(1, 1, '2024-03-01 10:00:00', 180.00),
(2, 2, '2024-03-01 12:30:00', 250.50),
(3, 3, '2024-03-01 14:45:00', 350.75),
(4, 4, '2024-03-01 17:00:00', 120.00),
(5, 5, '2024-03-01 19:30:00', 180.00),
(1, 6, '2024-03-01 22:45:00', 220.25),
(2, 7, '2024-03-02 01:00:00', 180.00),
(3, 8, '2024-03-02 03:15:00', 320.50),
(4, 9, '2024-03-02 06:30:00', 100.00),
(5, 10, '2024-03-02 09:45:00', 220.00);


show tables;
