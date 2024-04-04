
const con = require('../connection/mysql');

//CRUD - CREATE
const addVeiculo = (req, res) => {
    if (req.body != null && req.body.placa != null && req.body.modelo != null && req.body.marca != null && req.body.ano != null) {
        const { placa, modelo, marca, ano } = req.body;
        con.query('INSERT INTO veiculo (placa, modelo, marca, ano) VALUES (?, ?, ?, ?)', [placa, modelo, marca, ano], (err, result) => {
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
const getVeiculos = (req, res) => {
    if (req.params.placa != null) {
        con.query(`SELECT * FROM veiculo WHERE placa = '${req.params.placa}'`, (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar veiculos');
            }
            res.json(result);
        });
    } else {
        con.query('SELECT * FROM veiculo', (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar veiculos');
            }
            res.json(result);
        });
    }
}

//CRUD - UPDATE
const updateVeiculos = (req, res) => {
    if (req.body != null && req.body.placa != null && req.body.modelo != null && req.body.marca != null && req.body.ano != null) {
        const { placa, modelo, marca, ano } = req.body;
        con.query('UPDATE veiculo SET modelo = ?, marca = ?, ano = ? WHERE placa = ?', [modelo, marca, ano, placa], (err, result) => {
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
const deleteVeiculos = (req, res) => {
    if (req.params.placa != null) {
        con.query(`DELETE FROM veiculo WHERE placa = '${req.params.placa}'`, (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                if (result.affectedRows == 0) {
                    res.status(404).json('Veiculo não encontrado');
                } else {
                    res.status(200).json('Veiculo deletado com sucesso');
                }
            }
        });
    } else {
        res.status(400).json('Favor enviar a placa do veiculo');
    }
}

module.exports = {
    addVeiculo,
    getVeiculos,
    updateVeiculos,
    deleteVeiculos
}
