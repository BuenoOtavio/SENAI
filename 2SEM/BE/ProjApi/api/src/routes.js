//Dependências - Frameworks
const express = require("express");
const router = express.Router();

const Cliente = require("./controllers/cliente");

//Rota de teste
const teste = (req, res) => {
    res.json("Back-end respondendo ");
}

//Rotas de Saída - FrontEnd
app.get("/", teste);
app.post("/clientes", Cliente.create);
app.get("/clientes", Cliente.read);
app.put("/clientes/:id", Cliente.update);
app.delete("/clientes/:id", Cliente.del);


module.exports = router;