// ES8: Object.values, Object.entries, String padding, Trailing commas in function parameter lists and calls

const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj)); // [ 1, 2, 3 ]
console.log("*".repeat(20));
console.log(Object.entries(obj)); // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
console.log("*".repeat(20));

console.log(Object.entries(obj).map(([key, value]) => `${key}: ${value}`)); // [ 'a: 1', 'b: 2', 'c: 3' ]

//melhorias na Notação Literal
const nome = 'Carla';
const pessoa = {
    nome,
    ola() {
        return 'Oi gente!';
    }
};
console.log(pessoa.nome); // Carla
console.log(pessoa.ola()); // Oi gente!
console.log(pessoa.nome, pessoa.ola()); // Carla Oi gente!
console.log("*".repeat(20));
console.log(pessoa); // { nome: 'Carla', ola: [Function: ola] }
console.log("*".repeat(20));
//class
class Animal {
    constructor(nome) {
        this.nome = nome;
    }
    falar() {
        console.log(`${this.nome} faz barulho!`);
    }
}

class Cachorro extends Animal {
    falar() {
        return 'Au Au!';
    }
}

console.log(new Cachorro().falar());//
