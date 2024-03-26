--Crie uma consulta que liste os funcionários em ordem alfabética de nome
select * from funcionario order by nome;

--Crie uma consulta que liste os funcionários em ordem alfabética de nome
select nome, telefone from funcionario;

--Crie uma consulta que liste os funcionários em ordem alfabética de nome
select * from veiculos where marca = 'Fiat' order by ano desc;

--Crie uma consulta que liste os funcionários em ordem alfabética de nome
select v.*, COUNT(m.idManutencao) as qtdManutencoes from veiculos v left join manutencao m on v.placa = m.placaVeiculo group by v.placa;

CREATE VIEW tdsManutencoes AS
SELECT m.*, f.nome AS nomeFuncionario, v.modelo AS modeloVeiculo
FROM manutencao m
INNER JOIN funcionario f ON m.matriculaFuncionario = f.matricula
INNER JOIN veiculos v ON m.placaVeiculo = v.placa;
