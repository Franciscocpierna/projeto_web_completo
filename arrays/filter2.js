//Filter2 - Implementação do filter com forEach
 Array.prototype.filter2 = function(callback) {   
     const novoArray = []
     for (let i = 0; i < this.length; i++) {
         if(callback(this[i], i, this)) { // se o callback retornar true, adiciona o elemento no novo array
             novoArray.push(this[i])
         }
         
     }
     return novoArray // retorna o novo array com os elementos filtrados
    }


const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },          
      { nome: 'iPad Pro', preco: 4199, fragil: true },
      { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
      { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
  
  ]
  //
  
  const caro = produto => produto.preco >= 500 // filtra produtos com preço maior ou igual a 500
  const fragil = produto => produto.fragil // filtra produtos frágeis
  console.log (produtos.filter2(caro).filter2(fragil)) // filtra produtos com preço maior ou igual a 500 e frágeis
  
  

