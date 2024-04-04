const express = require('express');
const routes = express.Router();

const Veiculo = require('./controller/veiculo');
const Funcionario = require('./controller/funcionario');
const Telefone = require('./controller/telefone');
const Manutencao = require('./controller/manutencao');

routes.get('/', (req, res) => {
    res.json("API Transportadora XPTO 1.0")
});

routes.post('/veiculos', Veiculo.addVeiculo);
routes.get('/veiculos', Veiculo.getVeiculos);
routes.get('/veiculos/:placa', Veiculo.getVeiculos);
routes.put('/veiculos', Veiculo.updateVeiculos);
routes.delete('/veiculos/:placa', Veiculo.deleteVeiculos);

routes.post('/funcionarios', Funcionario.addFunc);
routes.get('/funcionarios', Funcionario.getFunc);
routes.get('/funcionarios/:matricula', Funcionario.getFunc);
routes.put('/funcionarios', Funcionario.updateFunc);
routes.delete('/funcionarios/:matricula', Funcionario.deleteFunc);

routes.post('/telefones', Telefone.addTel);
routes.get('/telefones', Telefone.getTel);
routes.get('/telefones/:numero', Telefone.getTel);
routes.put('/telefones', Telefone.updateTel);
routes.delete('/telefones/:numero', Telefone.deleteTel);

routes.post('/manutencoes', Manutencao.addManu);
routes.get('/manutencoes', Manutencao.getManu);
routes.get('/manutencoes/:id', Manutencao.getManu);
routes.put('/manutencoes', Manutencao.updateManu);
routes.delete('/manutencoes/:id', Manutencao.deleteManu);

module.exports = routes;