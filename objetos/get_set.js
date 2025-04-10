//console.log(obj4)
const sequencia = {
    _valor: 1,
    get valor() {
        return  this._valor++
     },
    set valor(valor) {
        if(valor > this._valor){
            this._valor=valor
        }
    } 
}
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 // não altera o valor, pois 900 < 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 2000 // altera o valor, pois 2000 > 1000
console.log(sequencia.valor, sequencia.valor)