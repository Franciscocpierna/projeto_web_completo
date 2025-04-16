
const sequence = {
  _id: 1,
  get id() {return this._id++;},//incrementar o id a cada vez que for chamado
}

const produtos = {}
 
function salvarProduto(produto) {
  if (!produto.id) produto.id = sequence.id//se não tiver id, atribui o id da sequencia
  produtos[produto.id] = produto//atribui o produto ao id no objeto produtos
  return produto//retorna o produto
}

function getProduto(id) {
  return produtos[id] || {}//retorna o produto ou um objeto vazio se não existir
}

function getProdutos() {
  return Object.values(produtos)//retorna os produtos como um array
}

module.exports = {salvarProduto, getProduto, getProdutos}//exporta as funções para serem usadas em outros arquivos
// exporta os produtos para serem usados em outros arquivos
