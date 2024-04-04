
const con = require('../connection/mysql');

//CRUD - CREATE
const addManu = (req, res) => {
    if (req.body != null && req.body.placa != null && req.body.matricula != null && req.body.inicio != null && req.body.fim != null && req.body.descricao != null) {
        const {placa, matricula, inicio, fim, descricao} = req.body;
        con.query('INSERT INTO manutencao (placa, matricula, inicio, fim, descricao) VALUES (?, ?, ?, ?, ?)', [placa, matricula, inicio, fim, descricao], (err, result) => {
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
const getManu = (req, res) => {
    if (req.params.id != null) {
        con.query(`SELECT * FROM manutencao WHERE id = '${req.params.id}'`, (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar manutencoes');
            }
            res.json(result);
        });
    } else {
        con.query('SELECT * FROM manutencao', (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar manutencao');
            }
            res.json(result);
        });
    }
}

//CRUD - UPDATE
const updateManu = (req, res) => {
    if (req.body != null && req.body.placa != null && req.body.id != null && req.body.matricula != null && req.body.inicio != null && req.body.fim != null && req.body.descricao != null) {
        const {placa, matricula, inicio, fim, descricao, id} = req.body;
        con.query('UPDATE manutencao SET placa = ?, matricula =?, inicio=?, fim=?, descricao=? WHERE id = ?', [placa, matricula, inicio, fim, descricao, id], (err, result) => {
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
const deleteManu = (req, res) => {
    if (req.params.id != null) {
        con.query(`DELETE FROM manutencao WHERE id = '${req.params.id}'`, (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                if (result.affectedRows == 0) {
                    res.status(404).json('Manutencao não encontrado');
                } else {
                    res.status(200).json('Manutencao deletado com sucesso');
                }
            }
        });
    } else {
        res.status(400).json('Favor enviar o id da Manutencao');
    }
}

module.exports = {
    addManu,
    getManu,
    updateManu,
    deleteManu
}
