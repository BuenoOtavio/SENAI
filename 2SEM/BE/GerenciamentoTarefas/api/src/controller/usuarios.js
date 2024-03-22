const e = require('express');
const con = require('../connection/mysql');

//CRUD - CREATE
const addUsuarios = (req, res) => {
    if (req.body != null && req.body.nome != null && req.body.email != null && req.body.senha != null) {
        const { nome, email, senha} = req.body;
        con.query('INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)', [nome, email, senha], (err, result) => {
            if (err) {
                res.status(500).json('Erro ao adicionar usuario');
            } else {
                req.body.id = result.insertId;
                res.status(201).json(req.body);
            }
        });
    } else {
        res.status(400).json('Favor enviar todos os campos obrigatórios');
    }
}

//CRUD - READ
const getUsuarios = (req, res) => {
    if (req.params.id != null) {
        con.query('SELECT * FROM usuarios WHERE id =' + req.params.id, (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar usuarios');
            }
            res.json(result);
        });
    } else {
        con.query('SELECT * FROM usuarios', (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar usuarios');
            }
            res.json(result);
        });
    }
}

//CRUD - UPDATE
const updateUsuarios = (req, res) => {
    if (req.body != null && req.body.id != null && req.body.nome != null && req.body.email != null && req.body.senha != null) {
        const { id, nome, email, senha} = req.body;
        con.query('UPDATE usuarios SET nome = ?, email = ?, senha = ? WHERE id = ?', [nome, email, senha, id], (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                res.status(202).json(req.body);
            }
        });
    } else {
        res.status(400).json('Favor enviar todos os campos obrigatórios');
    }
}

//CRUD - DELETE
const deleteUsuarios = (req, res) => {
    if (req.params != null && req.params.id != null) {
        const { id } = req.params;
        con.query('DELETE FROM usuarios WHERE id = ?', [id], (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                if (result.affectedRows == 0) {
                    res.status(404).json('Usuarios não encontrado');
                } else {
                    res.status(200).json('Usuarios removido com sucesso');
                }
            }
        });
    } else {
        res.status(400).json('Favor enviar todos os campos obrigatórios');
    }
}


module.exports = {
    addUsuarios,
    getUsuarios,
    updateUsuarios,
    deleteUsuarios
}