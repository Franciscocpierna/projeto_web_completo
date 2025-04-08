Array.prototype.map2 = function(callback) {
    const novoArray = []
    for(let i = 0; i < this.length; i++) {
        novoArray.push(callback(this[i], i, this))
    }
    return novoArray
}


const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'

    //retornar array apenas com os preços
    //parse para converter string em objeto
    //map para retornar apenas o preço
    
]
const paraObjeto = json => JSON.parse(json) // { nome: 'Borracha', preco: 3.45 } { nome: 'Caderno', preco: 13.9 } { nome: 'Kit de Lapis', preco: 41.22 } { nome: 'Caneta', preco: 7.5 }
const apenasPreco = produto => produto.preco // 3.45 13.9 41.22 7.5
const resultado = carrinho.map2(paraObjeto).map2(apenasPreco) // [ 3.45, 13.9, 41.22, 7.5 ]
console.log(resultado) // [ 3.45, 13.9, 41.22, 7.5 ]

