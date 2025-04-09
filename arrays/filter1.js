const produtos = [
  { nome: 'Notebook', preco: 2499, fragil: true },          
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }

]
//
console.log(produtos.filter(function(p) {
    //return false // nenhum produto é filtrado
    //return true // todos os produtos são filtrados
   // return p.preco > 2500 // filtra produtos com preço maior que 2500 que rsulta em [ { nome: 'iPad Pro', preco: 4199, fragil: true } ]
    //return p.fragil // filtra produtos frágeis       
   return p.fragil && p.preco > 500 // filtra produtos frágeis com preço maior que 500 que resulta em [ { nome: 'Notebook', preco: 2499, fragil: true }, { nome: 'iPad Pro', preco: 4199, fragil: true } ]

}
))  
const caro = produto => produto.preco >= 500 // filtra produtos com preço maior ou igual a 500
const fragil = produto => produto.fragil // filtra produtos frágeis
const resultado = produtos.filter(caro).filter(fragil) // filtra produtos com preço maior ou igual a 500 e frágeis
console.log(resultado) // [ { nome: 'Notebook', preco: 2499, fragil: true }, { nome: 'iPad Pro', preco: 4199, fragil: true } ]
