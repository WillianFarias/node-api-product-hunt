const express = require('express');
const routes = express.Router();

//Primeira rota
routes.get("/", (req, res) => {
  Product.create({
    title: 'React Native',
    description: 'Build native apps with React',
    url: 'http://github.com/facebook/react-native'
  });
  
  return res.send('Hello Rocketseat');
});

module.exports = routes;