'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://user001:user@ds117605.mlab.com:17605/listatelefonica');

const Contato = require('./models/contato');

const indexRoute = require('./routes/index-route');
const contatoRoute = require('./routes/contato-route')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use('/',indexRoute);
app.use('/contatos',contatoRoute);


module.exports = app;