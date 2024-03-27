const express = require('express');
const routes = express.Router();

const Usuario = require('./controller/usuarios');
const Tarefa = require('./controller/tarefas')

routes.get('/', (req, res) => {
    res.json("API Transportadora XPTO 1.0")
});

routes.post('/usuarios', Usuario.addUsuarios);
routes.get('/usuarios', Usuario.getUsuarios);
routes.get('/usuarios/:id', Usuario.getUsuarios);
routes.put('/usuarios', Usuario.updateUsuarios);
routes.delete('/usuarios/:id', Usuario.deleteUsuarios);

routes.post('/tarefas', Tarefa.addTarefas);
routes.get('/tarefas', Tarefa.getTarefas);
routes.get('/tarefas/:id', Tarefa.getTarefas);
routes.put('/tarefas', Tarefa.updateTarefas);
routes.put('/tarefas/:id', Tarefa.updateTarefas);
routes.delete('/tarefas/:id', Tarefa.deleteTarefas);

module.exports = routes;