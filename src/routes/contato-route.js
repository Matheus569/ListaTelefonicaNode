'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/contato-controller');

router.get('/', controller.get);

router.get('/:nome', controller.getByNome);

router.post('/adicionar', controller.post);

router.put('/atualizar/:id', controller.put);

router.delete('/excluir/:id', controller.delete);

module.exports = router;