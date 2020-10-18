const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o App
const app = express();

//Iniciando o DB
mongoose.connect( 'mongodb://localhost:27017/nodeapi', 
  {useNewUrlParser: true});
//registrando model na aplicacao
requireDir("./src/models");

const Product = mongoose.model('Product');

//use é um coringa, ou seja, toda vez que eu receber uma requisicao a partir da 
//rota api, mandaremos para o arquivo src
app.use('/api', require('./src/routes'));

//http://localhost:3001/
app.listen(3001);