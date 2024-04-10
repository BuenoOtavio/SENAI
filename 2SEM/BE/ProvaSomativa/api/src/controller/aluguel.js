
const con = require('../connection/mysql');

//CRUD - CREATE
const addAluguel = (req, res) => {
    if (req.body != null  && req.body.placa != null && req.body.cpf != null && req.body.reserva != null && req.body.retirada != null && req.body.devolucao != null && req.body.subtotal != null) {
        const { placa, cpf, reserva, retirada, devolucao, subtotal } = req.body;
        con.query('INSERT INTO aluguel ( placa, cpf, reserva, retirada, devolucao, subtotal) VALUES (?, ?, ?, ?, ?, ?)', [ placa, cpf, reserva, retirada, devolucao, subtotal], (err, result) => {
            if (err) {
                res.status(500).json(err);
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
const getAluguel = (req, res) => {
    if (req.params.id != null) {
        con.query(`SELECT * FROM aluguel WHERE id = '${req.params.id}'`, (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar alugueis');
            }
            res.json(result);
        });
    } else {
        con.query('SELECT * FROM aluguel', (err, result) => {
            if (err) {
                res.status(500).send('Erro ao listar alugueis');
            }
            res.json(result);
        });
    }
}

const getReservados = (req, res) => {
    con.query(`select * from vw_alugueis_reservados`, (err, result) => {
        if (err) {
            res.status(500).send('Erro ao listar alugueis');
        }
        res.json(result);
    });    
}

const getAlugados = (req, res) => {
    con.query(` select * from vw_alugueis_em_andamento`, (err, result) => {
        if (err) {
            res.status(500).send('Erro ao listar alugueis');
        }
        res.json(result);
    });    
}

const getTodos = (req, res) => {
    con.query(` select * from vw_todos_os_alugueis_com_status`, (err, result) => {
        if (err) {
            res.status(500).send('Erro ao listar alugueis');
        }
        res.json(result);
    });    
}

//CRUD - UPDATE
const updateAluguel = (req, res) => {
    if (req.body != null  && req.body.placa != null && req.body.cpf != null && req.body.reserva != null && req.body.retirada != null && req.body.devolucao != null && req.body.subtotal != null) {
        const { id, placa, cpf, reserva, retirada, devolucao, subtotal } = req.body;
        con.query('UPDATE aluguel SET placa = ?, cpf = ?, reserva= ?, retirada = ?, devolucao = ?, subtotal = ? WHERE id = ?', [placa, cpf, reserva, retirada, devolucao, subtotal, id], (err, result) => {
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
const deleteAluguel = (req, res) => {
    if (req.params.id != null) {
        con.query(`DELETE FROM aluguel WHERE id = '${req.params.id}'`, (err, result) => {
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
    addAluguel,
    getAluguel,
    updateAluguel,
    deleteAluguel,
    getReservados,
    getAlugados,
    getTodos
}
