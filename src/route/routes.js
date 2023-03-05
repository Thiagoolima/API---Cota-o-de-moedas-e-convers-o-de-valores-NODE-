const express = require('express');
const { converterValores, listarMoedas, obterCotacaoMoeda } = require('../controllers/cotacao');
const route = express();


route.get('/cotacao', obterCotacaoMoeda)
route.get('/listarmoedas', listarMoedas)
route.get('/convertervalores', converterValores)

module.exports = {
    route
}