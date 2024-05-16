const express = require('express');

const router = express.Router();
const destinos = require('./controllers/destinos');
const hoteis = require('./controllers/hoteis');
const pontosTuristicos = require('./controllers/pontoTuristico');


router.get('/', (req, res) => {
    res.send('Hello World!').end();
});

router.post('/destinos', destinos.create);
router.get('/destinos', destinos.read);
router.get('/destinos/:id', destinos.readById);
router.post('/destinos/nome', destinos.readByName);
router.delete('/destinos/:id', destinos.remove);
router.put('/destinos/:id', destinos.update);

router.post('/hoteis', hoteis.create);
router.get('/hoteis', hoteis.read);
router.get('/hoteis/:id', hoteis.readById);
router.post('/hoteis/nome', hoteis.readByName);
router.delete('/hoteis/:id', hoteis.remove);
router.put('/hoteis/:id', hoteis.update);

router.post('/pontosTuristicos', pontosTuristicos.create);
router.get('/pontosTuristicos', pontosTuristicos.read);
router.get('/pontosTuristicos/:id', pontosTuristicos.readById);
router.post('/pontosTuristicos/nome', pontosTuristicos.readByName);
router.delete('/pontosTuristicos/:id', pontosTuristicos.remove);
router.put('/pontosTuristicos/:id', pontosTuristicos.update);

module.exports = router;