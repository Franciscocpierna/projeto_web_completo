const soma = function(x,y){
    return x+y

}

const impresult = function (a,b, operacao = soma) {
      
        console.log(operacao(a,b))       
}
impresult(3,4)
impresult(3,4,soma)
impresult(3,4,function(x,y){
    return x-y
})
impresult(3,4,(x,y) => x*y )
const pessoa = {
    falar: function(){      //funcao anonima
        console.log("Opa")
    }
}
pessoa.falar()
const pessoa1 = {
    falar(){              // sem função anonima
        console.log("Opa")
    }
}
pessoa1.falar()
