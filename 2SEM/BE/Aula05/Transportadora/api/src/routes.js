//Dependências - Frameworks
const express = require("express");
const router = express.Router();

const Cliente = require("./controller/Cliente.js");

//Rota de teste
const teste = (req, res) => {
    res.json("Back-end, API Lojinha respondendo!");
}

//Rotas de Saída - Clientes
router.get("/", teste);
router.post("/cliente", Cliente.create);
router.get("/cliente", Cliente.read);
router.put("/cliente/:idCliente", Cliente.update);
router.delete("/cliente/:idCliente", Cliente.del);

module.exports = router;