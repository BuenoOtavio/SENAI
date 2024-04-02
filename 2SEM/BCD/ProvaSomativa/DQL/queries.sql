select * from clientes order by nome;

select nome, telefone from clientes;

select * from veiculos order by marca asc, modelo asc;

select * from veiculos where marca = 'Fiat' order by diaria desc;

select v.*, count(r.id) as quantidadeAlugueis from veiculos v left join reserva r on v.placa = r.veiculo group by v.placa, v.modelo, v.marca, v.tipo, v.diaria;

CREATE VIEW tdsAlugueis AS
SELECT r.*, c.nome AS nomeCliente, v.modelo AS modeloVeiculo
FROM reserva r
INNER JOIN clientes c ON r.cliente = c.cpf
INNER JOIN veiculos v ON r.veiculo = v.placa;