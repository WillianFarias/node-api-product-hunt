const express = require('express');
const routes = express.Router();

const ProductController = require('./controller/ProductController');

//Primeira rota
routes.get("/products", ProductController.index);/* (req, res) => {
  Product.create({
    title: 'React Native',
    description: 'Build native apps with React',
    url: 'http://github.com/facebook/react-native'
  });
  
  return res.send('Hello Rocketseat');
});*/
routes.get("/products/:id", ProductController.show);
routes.post("/products", ProductController.store);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.remove);

module.exports = routes;

