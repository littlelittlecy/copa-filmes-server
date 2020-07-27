const express = require('express');
const routes = express.Router();

const apiTest = require('./controller/index');
const apiFilms = require('./controller/films');

routes.get('/', apiTest.index);
routes.get('/getfilms', apiFilms.getFilms);
routes.post('/challenge',apiFilms.iniciarBatalha);

module.exports = routes;