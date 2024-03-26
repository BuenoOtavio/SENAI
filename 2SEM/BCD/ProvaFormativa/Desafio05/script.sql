--Crie uma consulta que liste os funcionários em ordem alfabética de nome
select * from funcionario order by nome;

--Crie uma consulta que liste os funcionários em ordem alfabética de nome
select nome, telefone from funcionario;

--Crie uma consulta que liste os funcionários em ordem alfabética de nome
select * from veiculos where marca = 'Fiat' order by ano desc;

--Crie uma consulta que liste os funcionários em ordem alfabética de nome
select v.*, COUNT(m.idManutencao) as qtdManutencoes from veiculos v left join manutencao m on v.placa = m.placaVeiculo group by v.placa;