// Define a classe Cliente que representa um cliente no seu sistema.
export default class Cliente {
    // Declaração de atributos privados usando a sintaxe de #.
    // Isso garante que os dados só possam ser acessados e modificados dentro da classe.
    #id: string | null
    #nome: string
    #idade: number

    // O construtor é chamado ao criar uma nova instância da classe.
    // Ele inicializa os atributos com os valores passados.
    // O 'id' é opcional e recebe null por padrão, ideal para novos clientes.
    constructor(nome: string, idade: number, id: string | null = null) {
        this.#nome = nome
        this.#idade = idade
        this.#id = id
    }

    // Método estático 'vazio' para criar um cliente em branco.
    // Métodos estáticos pertencem à classe, não à instância,
    // e são úteis para criar objetos com valores padrão.
    static vazio() {
        return new Cliente('', 0)
    }

    // Métodos 'get' para acessar os valores dos atributos privados.
    // Eles permitem a leitura dos dados, mas evitam a modificação direta de fora da classe,
    // o que é uma boa prática de segurança.

    get id() {
        return this.#id
    }

    get nome() {
        return this.#nome
    }

    get idade() {
        return this.#idade
    }
}