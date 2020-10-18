const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
  //lista todos os produtos que temos em nossa base de dados
  async index(req, res) {
    //possivel fazer uma verificacao no resultado
    //await faz com que a proxima linha só execute depois que meus registros sej
    //am retornados do bd
    const { page = 1 } = req.query;
    const products = await Product.paginate({/*parametros */ }, {
      page, limit: 10
    });

    //meu resultado sera retornado em json
    return res.json(products);
  },

  async show(req, res) {
    const product = await Product.findById(req.params.id);
    return res.json(product);
  },

  async store(req, res) {
    const product = await Product.create(req.body);

    //retorna o objeto que acabou de ser criado na nossa base de dados
    return res.json(product);
  },

  async update(req, res) {
    //{new: true} retorna o novo obj, caso nao seja passado nao sera atualizado
    const product = await Product.findByIdAndUpdate(req.params.id, req.body,
      { new: true });

    return res.json(product);
  },

  async remove(req, res) {
    const product = await Product.findByIdAndRemove(req.params.id);

    return res.send();
  }
}