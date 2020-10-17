const express = require('express');
const mongosse = require('mongoose');

//Iniciando o App
const app = express();

//Iniciando o DB
mongosse.connect('mongodb://localhost:27017/nodeapi');

//Primeira rota
app.get('/', (req, res) => {
  res.send('Hello Rocketseat');
});

app.listen(3001);