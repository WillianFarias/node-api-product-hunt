const mongoose =  require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
  //lista todos os produtos que temos em nossa base de dados
  async index(req, res){
    //possivel fazer uma verificacao no resultado
    //await faz com que a proxima linha só execute depois que meus registros sej
    //am retornados do bd
    const products = await Product.find();

    //meu resultado sera retornado em json
    return res.json(products);
  }
}