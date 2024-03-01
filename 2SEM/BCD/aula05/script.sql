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
);

create table Veiculo(
    idVeiculo integer primary key auto_increment,
    placa varchar(50) not null,
    modelo varchar(50) not null,
    capacidade varchar(50) not null
);

create table Rota(
    idRota integer primary key auto_increment,
    origem varchar(50) null null,
    destino varchar(50) not null,
    distancia varchar(50) not null
);

create table Entrega(
     idEntrega integer primary key auto_increment,
     inicio varchar(50) null null,
     fim varchar(50) null null,
     istatus varchar(50) null null
);

create table Pedido(
    idPedido integer primary key auto_increment,
    dataPedido date,
    idEntrega integer not null,
    idCliente integer not null, 
    foreign key(idEntrega) references Entrega(idEntrega), 
    foreign key(idCliente) references Cliente(idCliente),
    valor decimal(5,2) not null,
    istatus varchar(50) not null
);

-- Inserindo valores na tabela Cliente
INSERT INTO Cliente (nome, endereco, telefone, email) VALUES
('João Silva', 'Rua A, 123', '123456789', 'joao@email.com'),
('Maria Oliveira', 'Rua B, 456', '987654321', 'maria@email.com'),
('Carlos Santos', 'Rua C, 789', '567890123', 'carlos@email.com');

-- Inserindo valores na tabela Funcionario
INSERT INTO Funcionario (nome, cargo, salario) VALUES
('Ana Pereira', 'Motorista', 5000.00),
('Pedro Lima', 'Assistente', 6000.00),
('Lucia Costa', 'Gerente', 7000.00);

-- Inserindo valores na tabela Veiculo
INSERT INTO Veiculo (placa, modelo, capacidade) VALUES
('ABC123', 'Carro', '3 toneladas'),
('DEF456', 'Caminhão', '10 toneladas'),
('GHI789', 'Van', '5 toneladas');

-- Inserindo valores na tabela Rota
INSERT INTO Rota (origem, destino, distancia) VALUES
('Jaguariúna', 'Campinas', '100 km'),
('Campinas', 'Mogi Mirim', '200 km'),
('Mogi Mirim', 'Pedreira', '150 km'),
('Hortolândia', 'Aracaju', '120 km'),
('Roraima', 'Serra Negra', '180 km');

-- Inserindo valores na tabela Entrega com datas reais
INSERT INTO Entrega (inicio, fim, istatus) VALUES
('2024-02-28 08:00:00', '2024-02-28 14:00:00', 'Em andamento'),
('2024-02-28 10:30:00', '2024-02-28 16:30:00', 'Concluída'),
('2024-02-28 09:45:00', '2024-02-28 13:30:00', 'Pendente'),
('2024-02-28 11:15:00', '2024-02-28 15:45:00', 'Em andamento'),
('2024-02-28 12:30:00', '2024-02-28 18:00:00', 'Concluída'),
('2024-02-29 08:30:00', '2024-02-29 15:00:00', 'Pendente'),
('2024-02-29 11:00:00', '2024-02-29 17:30:00', 'Em andamento'),
('2024-02-29 10:15:00', '2024-02-29 14:45:00', 'Concluída'),
('2024-02-29 09:45:00', '2024-02-29 16:00:00', 'Pendente'),
('2024-02-29 12:00:00', '2024-02-29 18:30:00', 'Em andamento');

-- Inserindo valores na tabela Pedido
INSERT INTO Pedido (dataPedido, idEntrega, idCliente, valor, istatus) VALUES
('2024-02-28', 1, 1, 100.00, 'Em andamento'),
('2024-02-28', 2, 2, 150.00, 'Concluído'),
('2024-02-28', 3, 3, 200.00, 'Pendente'),
('2024-02-28', 4, 1, 120.00, 'Em andamento'),
('2024-02-28', 5, 2, 180.00, 'Concluído'),
('2024-02-29', 6, 3, 80.00, 'Pendente'),
('2024-02-29', 7, 1, 130.00, 'Em andamento'),
('2024-02-29', 8, 2, 180.00, 'Concluído'),
('2024-02-29', 9, 3, 110.00, 'Pendente'),
('2024-02-29', 10, 1, 150.00, 'Em andamento'),
('2024-02-29', 1, 2, 200.00, 'Concluído'),
('2024-02-29', 2, 3, 90.00, 'Pendente'),
('2024-02-29', 3, 1, 140.00, 'Em andamento'),
('2024-02-29', 4, 2, 160.00, 'Concluído'),
('2024-02-29', 5, 3, 95.00, 'Pendente'),
('2024-02-29', 6, 1, 120.00, 'Em andamento'),
('2024-02-29', 7, 2, 170.00, 'Concluído'),
('2024-02-29', 8, 3, 100.00, 'Pendente'),
('2024-02-29', 9, 1, 110.00, 'Em andamento'),
('2024-02-29', 10, 2, 190.00, 'Concluído');