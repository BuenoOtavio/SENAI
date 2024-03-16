const express = require('express');
const routes = express.Router();

const Cliente = require('./controller/cliente');
const Veiculo = require('./controller/veiculo');
const Rota = require('./controller/rota');
const Funcionario = require('./controller/funcionario');
const Entrega = require('./controller/entrega');
const Pedido = require('./controller/pedido');

routes.get('/', (req, res) => {
    res.json("API Transportadora XPTO 1.0")
});

routes.post('/clientes', Cliente.addCliente);
routes.get('/clientes', Cliente.getClientes);
routes.get('/clientes/:id', Cliente.getClientes);
routes.put('/clientes', Cliente.updateCliente);
routes.delete('/clientes/:id', Cliente.deleteCliente);

routes.post('/veiculos', Veiculo.addVeiculo);
routes.get('/veiculos', Veiculo.getVeiculos);
routes.get('/veiculos/:placa', Veiculo.getVeiculos);
routes.put('/veiculos', Veiculo.updateVeiculo);
routes.delete('/veiculos/:placa', Veiculo.deleteVeiculo);

routes.post('/rotas', Rota.addRota);
routes.get('/rotas', Rota.getRota);
routes.get('/rotas/:id', Rota.getRota);
routes.put('/rotas', Rota.updateRota);
routes.delete('/rotas/:id', Rota.deleteRota);

routes.post('/funcionarios', Funcionario.addFuncionario);
routes.get('/funcionarios', Funcionario.getFuncionario);
routes.get('/funcionarios/:id', Funcionario.getFuncionario);
routes.put('/funcionarios', Funcionario.updateFuncionario);
routes.delete('/funcionarios/:id', Funcionario.deleteFuncionario);

routes.post('/entregas', Entrega.addEntrega);
routes.get('/entregas', Entrega.getEntrega);
routes.get('/entregas/:id', Entrega.getEntrega);
routes.put('/entregas', Entrega.updateEntrega);
routes.delete('/entregas/:id', Entrega.deleteEntrega);

routes.post('/pedidos', Pedido.addPedido);
routes.get('/pedidos', Pedido.getPedido);
routes.get('/pedidos/:id', Pedido.getPedido);
routes.put('/pedidos', Pedido.updatePedido);
routes.delete('/pedidos/:id', Pedido.deletePedido);

module.exports = routes;