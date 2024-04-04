
const con = require('../connection/mysql');

//CRUD - CREATE
const addTel = (req, res) => {
    if (req.body != null && req.body.matricula != null && req.body.numero != null) {
        const {matricula, numero} = req.body;
        con.query('INSERT INTO telefone (matricula, numero) VALUES (?, ?)', [matricula, numero], (err, result) => {
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
const getTel = (req, res) => {
    if (req.params.numero != null) {
        con.query(`SELECT * FROM telefone WHERE numero = '${req.params.numero}'`, (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar numeros');
            }
            res.json(result);
        });
    } else {
        con.query('SELECT * FROM telefone', (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar telefones');
            }
            res.json(result);
        });
    }
}

//CRUD - UPDATE
const updateTel = (req, res) => {
    if (req.body != null && req.body.numero != null && req.body.matricula != null ) {
        const { matricula, numero } = req.body;
        con.query('UPDATE telefone SET matricula =? WHERE numero = ?', [matricula,numero], (err, result) => {
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
const deleteTel = (req, res) => {
    if (req.params.numero != null) {
        con.query(`DELETE FROM telefone WHERE numero = '${req.params.numero}'`, (err, result) => {
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
    addTel,
    getTel,
    updateTel,
    deleteTel
}
