
const con = require('../connection/mysql');

//CRUD - CREATE
const addFunc = (req, res) => {
    if (req.body != null && req.body.matricula != null && req.body.nome != null) {
        const {matricula, nome} = req.body;
        con.query('INSERT INTO funcionario (matricula, nome) VALUES (?, ?)', [matricula, nome], (err, result) => {
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
const getFunc = (req, res) => {
    if (req.params.matricula != null) {
        con.query(`SELECT * FROM funcionario WHERE matricula = '${req.params.matricula}'`, (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar funcionarios');
            }
            res.json(result);
        });
    } else {
        con.query('SELECT * FROM funcionario', (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar funcionarios');
            }
            res.json(result);
        });
    }
}

//CRUD - UPDATE
const updateFunc = (req, res) => {
    if (req.body != null && req.body.matricula != null && req.body.nome != null) {
        const { matricula, nome } = req.body;
        con.query('UPDATE funcionario SET nome =? WHERE matricula = ?', [nome, matricula], (err, result) => {
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
const deleteFunc = (req, res) => {
    if (req.params.matricula != null) {
        con.query(`DELETE FROM funcionario WHERE matricula = '${req.params.matricula}'`, (err, result) => {
            if (err) {
                res.status(500).json(err);
            } else {
                if (result.affectedRows == 0) {
                    res.status(404).json('Funcionario não encontrado');
                } else {
                    res.status(200).json('Funcionario deletado com sucesso');
                }
            }
        });
    } else {
        res.status(400).json('Favor enviar a placa do veiculo');
    }
}

module.exports = {
    addFunc,
    getFunc,
    updateFunc,
    deleteFunc
}
