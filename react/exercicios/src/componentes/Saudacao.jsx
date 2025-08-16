// A primeira linha importa o React e a classe 'Component' da biblioteca 'react'.
// A classe 'Component' é a base para criar componentes de classe.
import React, { Component } from 'react';

// A linha seguinte 'export default' torna o componente 'Saudacao' disponível
// para ser importado e usado em outros arquivos.
export default class Saudacao extends Component {

    // A declaração 'state' inicializa o estado interno do componente.
    // 'tipo' e 'nome' são definidos com base nas propriedades ('props') passadas ao componente.
    // Esta é uma sintaxe moderna que elimina a necessidade do 'constructor' para o estado.
    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    };

    // A função 'setTipo' é responsável por atualizar o estado 'tipo'.
    // Ela usa a sintaxe de 'arrow function' para garantir que o 'this'
    // se refira sempre ao componente, evitando o uso de 'bind' no construtor.
    // 'e.target.value' pega o valor atual do campo de input.
    setTipo = (e) => {
        this.setState({ tipo: e.target.value });
    };

    // A função 'setNome' faz o mesmo, mas para o estado 'nome'.
    // A 'arrow function' aqui também garante a vinculação correta do 'this'.
    setNome = (e) => {
        this.setState({ nome: e.target.value });
    };

    // O método 'render()' é obrigatório em componentes de classe.
    // Ele é responsável por retornar o JSX, que é a estrutura visual do componente.
    render() {
        // A desestruturação facilita o acesso às propriedades do estado.
        // Em vez de 'this.state.tipo', você pode usar apenas 'tipo'.
        const { tipo, nome } = this.state;
        return (
            // O 'div' é o elemento raiz que agrupa todos os outros elementos do componente.
            <div>
                {/* O 'h1' exibe o tipo e o nome de forma dinâmica, usando os valores do estado. */}
                <h1>{tipo} {nome}!</h1>
                {/* A tag 'hr' é uma linha horizontal para separar os elementos. */}
                <hr />
                {/* O primeiro 'input' é para o 'tipo' da saudação. */}
                <input
                    type="text"
                    placeholder="Tipo..."
                    // 'value={tipo}' faz com que o valor do input seja sempre o mesmo que o estado 'tipo'.
                    // Isso cria um 'input controlado'.
                    value={tipo}
                    // 'onChange={this.setTipo}' chama a função 'setTipo'
                    // toda vez que o valor do input muda.
                    onChange={this.setTipo}
                />
                {/* O segundo 'input' é para o 'nome'. */}
                <input
                    type="text"
                    placeholder="Nome..."
                    value={nome}
                    onChange={this.setNome}
                />
            </div>
        );
    }
}