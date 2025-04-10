
console.log("Arrow 1")
let dobro = function(a) {
   return 2 * a
}

console.log(dobro(5)) 
console.log(dobro(10))

dobro = (a) => {
    return 2 * a
}
console.log(dobro(5)) 
dobro = a => 2 * a //return implicito
console.log(dobro(5)) 
console.log(dobro(Math.PI).toFixed(2)) 

let ola = function(){
    return "ola"
} 
console.log(ola()) 

ola = () => "ola"
console.log(ola()) 

ola = () =>{
    return "Ola"
}
console.log(ola()) 

ola = _ => 'OLaa'
console.log(ola()) 

/*console.log("Arrow 2")
function Pessoa(){
    this.idade=0
    setInterval(() => {
       this.idade++
       console.log(this.idade) 

    }, 1000)
} 

new Pessoa */

console.log("Arrow 3")
/*
let comparaComThis = function (param) {// função normal
    console.log(param===this)// compara o parametro com this
}
comparaComThis(global)//true // compara o parametro com global, que é o objeto global do Node.js

const obj = {}
comparaComThis=comparaComThis.bind(obj) // essa linha aponta para objeto obj
comparaComThis(obj)//true
comparaComThis(global)//false

let comparaComThisArrow = param => console.log(this === param) 
comparaComThisArrow(global)
comparaComThisArrow(module.exports)
comparaComThisArrow(this)
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports) */