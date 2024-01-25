drop database if exists lojinha;

create database lojinha;

use lojinha;

create table Clientes(
    id integer primary key auto_increment,
    cpf varchar(20) not null unique,
    nome varchar(50) not null,
    sobrenome varchar(50) not null,
    nascimento date not null,
);

insert into Clientes(cpf, nome, sobrenome, nascimento) values 
("111.111.111.11", "Jair", "Silva", "1980-01-01"),
("125.190.214.18", "Neyzinho", "Amado", "2000-11-21"),
("151.090.789.09", "Renan", "Jackson", "1976-09-30"),
("502.727.138.64", "Lulinha", "Fazueli", "1999-02-11"),
("946.715.529.75", "Thomas", "Hillfiger", "2004-04-19");


select * from Clientes;