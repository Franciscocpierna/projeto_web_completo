class avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome;
    }
}
class pai extends avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome);
        this.profissao = profissao;
    }
}
class Filho extends pai {
    constructor() {
        super('Silva');
    }
} 

const filho = new Filho();
console.log(filho); // Filho { sobrenome: 'Silva', profissao: 'Professor' }
console.log(filho.sobrenome); // Silva
console.log(filho.profissao); // Professor
console.log(filho.__proto__ === Filho.prototype); // true

console.log(filho.__proto__.__proto__ === pai.prototype); // true
console.log(filho.__proto__.__proto__.__proto__ === avo.prototype); // true