const express = require('express');
const routes = express.Router();

const Aluguel = require('./controller/aluguel');
const Cliente = require('./controller/cliente');
const Telefone = require('./controller/telefone');
const Veiculo = require('./controller/veiculo');

routes.get('/', (req, res) => {
    res.json("API Transportadora XPTO 1.0")
});

routes.post('/veiculos', Veiculo.addVeiculo);
routes.get('/veiculos', Veiculo.getVeiculos);
routes.get('/veiculos/:placa', Veiculo.getVeiculos);
routes.put('/veiculos', Veiculo.updateVeiculos);
routes.delete('/veiculos/:placa', Veiculo.deleteVeiculos);

routes.post('/clientes', Cliente.addCliente);
routes.get('/clientes', Cliente.getCliente);
routes.get('/clientes/:cpf', Cliente.getCliente);
routes.put('/clientes', Cliente.updateCliente);
routes.delete('/clientes/:cpf', Cliente.deleteCliente);

routes.post('/telefones', Telefone.addTel);
routes.get('/telefones', Telefone.getTel);
routes.get('/telefones/:numero', Telefone.getTel);
routes.put('/telefones', Telefone.updateTel);
routes.delete('/telefones/:numero', Telefone.deleteTel);

routes.post('/alugueis', Aluguel.addAluguel);
routes.get('/alugueis', Aluguel.getAluguel);
routes.get('/alugueis/:id', Aluguel.getAluguel);
routes.put('/alugueis', Aluguel.updateAluguel);
routes.delete('/alugueis/:id', Aluguel.deleteAluguel);

routes.get('/reservados', Aluguel.getReservados);
routes.get('/alugados', Aluguel.getAlugados);
routes.get('/todos', Aluguel.getTodos);

module.exports = routes;