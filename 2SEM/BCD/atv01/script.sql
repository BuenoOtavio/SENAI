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
select placa, count(idEntrega)  as 'total de entregas' FROM entrega group by placa order by count (idEntrega) desc limit 1;

--7
create view relatorio_de_entregas_01 as
select idEntrega, placa, motorista from entrega;

--8
create view relatorio_de_entregas_02 as
Select e.motorista, e.placa, sum(p.valor) as 'Valor Entrega' from entrega e inner join pedido p on e.idEntrega = p.idEntrega group by p.idEntrega;