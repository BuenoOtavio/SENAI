const e = require('express');
const con = require('../connection/mysql.js');

//CRUD - CREATE
const addTarefas = (req, res) => {
    if (req.body != null && req.body.descricao != null && req.body.dataVencimento != null && req.body.estatus != null && req.body.idUsuario != null) {
        const {descricao, dataVencimento, estatus, idUsuario} = req.body;
        con.query('INSERT INTO tarefas (descricao, dataVencimento, estatus, idUsuario) VALUES (?, ?, ?, ?)', [descricao, dataVencimento, estatus, idUsuario], (err, result) => {
            if (err) {
                res.status(500).json('Erro ao adicionar tarefa');
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
const getTarefas = (req, res) => {
    if (req.params.id != null) {
        con.query('SELECT * FROM tarefas WHERE id =' + req.params.id, (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar tarefas');
            }
            res.json(result);
        });
    } else {
        con.query('SELECT * FROM tarefas', (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar tarefas');
            }
            res.json(result);
        });
    }
}

//CRUD - UPDATE
const updateTarefas = (req, res) => {
    if (req.body != null && req.body.id != null && req.body.descricao != null && req.body.dataVencimento != null && req.body.estatus != null && req.body.idUsuario != null) {
        const { id, descricao, dataVencimento, estatus, idUsuario} = req.body;
        con.query('UPDATE tarefas SET descricao = ?, dataVencimento = ?, estatus = ?, idUsuario = ? WHERE id = ?', [descricao, dataVencimento, estatus, idUsuario, id], (err, result) => {
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
const deleteTarefas = (req, res) => {
    if (req.params != null && req.params.id != null) {
        const { id } = req.params;
        con.query('DELETE FROM tarefas WHERE id = ?', [id], (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                if (result.affectedRows == 0) {
                    res.status(404).json('Tarefa não encontrada');
                } else {
                    res.status(200).json('Tarefa removidas com sucesso');
                }
            }
        });
    } else {
        res.status(400).json('Favor enviar todos os campos obrigatórios');
    }
}


module.exports = {
    addTarefas,
    getTarefas,
    updateTarefas,
    deleteTarefas  
}