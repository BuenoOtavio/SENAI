--1

select nome from cliente;

--2

SELECT motorista, count(idEntrega) as 'total Entregas' FROM entrega group by motorista;

--3

create view total_por_motoristas as
SELECT motorista, count(idEntrega) as 'total Entregas' FROM entrega group by motorista;

--4
select * from rota order by distancia;

--5
select * from funcionario order by nome;

--6
