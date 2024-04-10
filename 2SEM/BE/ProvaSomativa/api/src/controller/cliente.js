
const con = require('../connection/mysql');

//CRUD - CREATE
const addCliente = (req, res) => {
    if (req.body != null && req.body.nome_cliente != null && req.body.cpf != null) {
        const {cpf, nome_cliente} = req.body;
        con.query('INSERT INTO cliente (cpf, nome_cliente) VALUES (?, ?)', [cpf, nome_cliente], (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(201).json(req.body);
            }
        });
    } else {
        res.status(400).json('Favor enviar todos os campos obrigatórios');
    }
}

//CRUD - READ
const getCliente = (req, res) => {
    if (req.params.cpf != null) {
        con.query(`select * from cliente where cpf = '${req.params.cpf}'`, (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar numeros');
            }
            res.json(result);
        });
    } else {
        con.query('select * from cliente', (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar telefones');
            }
            res.json(result);
        });
    }
}

//CRUD - UPDATE
const updateCliente = (req, res) => {
    if (req.body != null  && req.body.cpf != null && req.body.nome_cliente != null) {
        const { cpf, nome_cliente} = req.body;
        con.query('UPDATE cliente SET nome_cliente = ? WHERE cpf = ?', [nome_cliente, cpf], (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(200).json(req.body);
            }
        });
    } else {
        res.status(400).json('Favor enviar todos os campos obrigatórios');
    }
}

//CRUD - DELETE
const deleteCliente = (req, res) => {
    if (req.params.cpf != null) {
        con.query(`DELETE FROM cliente WHERE cpf = '${req.params.cpf}'`, (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                if (result.affectedRows == 0) {
                    res.status(404).json('Telefone não encontrado');
                } else {
                    res.status(200).json('Telefone deletado com sucesso');
                }
            }
        });
    } else {
        res.status(400).json('Favor enviar o numero do telefone');
    }
}

module.exports = {
    addCliente,
    getCliente,
    updateCliente,
    deleteCliente
}
