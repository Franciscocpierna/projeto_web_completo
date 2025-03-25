// Função em js é First Class objects (citizens)
// Higher-order function

// criar de forma literal
function fun1(){ }

//armazenar em uma váriavel
const fun2 = function () { }
//armazenar dentro de um array
const array = [function (a,b){return a+b}, fun1, fun2]
console.log(array[0](2,3))
//armazenar em um atributo de objeto
const obj = {}
obj.falar = function() {return "opa!"}
console.log(obj.falar())
console.log(obj)
//passar função como parametro pra outra função
function run (fun){
  fun()
}

run(function () {console.log("Executando...") })
run(function () {console.log(3+5) })
//uma função pode retornar / conter uma função
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}
soma(2,3)(4)
const cincomais=soma(2,3)
cincomais(5)