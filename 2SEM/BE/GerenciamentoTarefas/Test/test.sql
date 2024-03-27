INSERT INTO usuarios (nome, email, senha) VALUES
('João', 'joao@email.com', 'senha123'),
('Maria', 'maria@email.com', 'abc123'),
('Pedro', 'pedro@email.com', 'senha456');

-- Inserindo valores na tabela Tarefas
INSERT INTO tarefas (descricao, dataVencimento, estatus, idUsuario, idAtribuidor) VALUES
('Fazer relatório mensal', '2024-03-25', 'A fazer', 1, 3),
('Preparar apresentação', '2024-04-10', 'Em andamento', 2, 2),
('Revisar documento', '2024-03-22', 'Concluído', 3, 1),
('Agendar reunião', '2024-03-28', 'A fazer', 1, 2);


describe  usuarios;

describe tarefas;

select * from usuarios;

select * from  tarefas;
