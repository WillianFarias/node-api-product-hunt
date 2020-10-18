const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

//Iniciando o App
const app = express();
//informa que minha aplicacao deve receber dados json
app.use(express.json());
//é possível configura quem pode acessar e outras config de seguranca
app.use(cors);

//Iniciando o DB
mongoose.connect( 'mongodb://localhost:27017/nodeapi', 
  {useNewUrlParser: true});
//registrando model na aplicacao
requireDir("./src/models");

//const Product = mongoose.model('Product');

//use é um coringa, ou seja, toda vez que eu receber uma requisicao a partir da 
//rota api, mandaremos para o arquivo src
//rotas
app.use('/api', require('./src/routes'));

//http://localhost:3001/
app.listen(3001);