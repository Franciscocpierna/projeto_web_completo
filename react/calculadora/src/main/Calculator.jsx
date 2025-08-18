/* Importa a biblioteca React e o componente de classe,
   necessários para criar o componente da calculadora. */
import React, { Component } from 'react';
/* Importa o arquivo de estilo CSS para a calculadora. */
import './Calculator.css';
/* Importa o componente Button, que representa cada botão da calculadora. */
import Button from '../components/Button';
/* Importa o componente Display, que representa o visor da calculadora. */
import Display from '../components/Display';


/* Define o estado inicial da aplicação,
   que será usado para resetar a calculadora. */
const initialState = {
    /* O valor exibido no visor, '0' no início. */
    displayValue: '0',
    /* Flag para indicar se o visor deve ser limpo na próxima digitação. */
    clearDisplay: false,
    /* A operação matemática selecionada (ex: +, -, *, /). */
    operation: null,
    /* Um array para armazenar os dois valores da operação (ex: [valor1, valor2]). */
    values: [0, 0],
    /* O índice do valor atual sendo manipulado no array 'values' (0 ou 1). */
    current: 0
}

/* Exporta o componente de classe principal, Calculator. */
export default class Calculator extends Component {

    /* Inicializa o estado do componente com os valores de initialState. */
    state = { ...initialState }

    /* O construtor é executado quando o componente é criado.
       Ele vincula os métodos da classe para que 'this' se refira
       corretamente ao componente. */
    constructor(props) {
        super(props)

        /* Vincula o método clearMemory() ao próprio componente ('this').
        Isso garante que, quando clearMemory() for chamado, ele consiga acessar
        e modificar corretamente o estado do componente. */
        this.clearMemory = this.clearMemory.bind(this)
        /* Vincula o método setOperation() ao componente.
        Essencial para que o 'this' dentro de setOperation()
        seja o componente, e não o elemento que disparou o evento. */
        this.setOperation = this.setOperation.bind(this)
        /* Vincula o método addDigit() ao componente.
        Permite que addDigit() acesse o 'this.state' e o 'this.setState'
        para atualizar o visor e os valores da calculadora. */
        this.addDigit = this.addDigit.bind(this)
        }

    /* O método clearMemory() reseta o estado da calculadora
       para os valores iniciais. */
    clearMemory() {
        this.setState({ ...initialState })
    }

    /* O método setOperation() define a operação matemática. */
    setOperation(operation) {
        /* Se o valor atual for o primeiro (índice 0),
           define a operação, muda para o segundo valor (índice 1)
           e prepara para limpar o display. */
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
        } else {
            /* Se for o segundo valor, executa a operação. */
            /* Verifica se a operação atual é o sinal de igual. */
            const equals = operation === '='
            /* Pega a operação que foi selecionada anteriormente. */
            const currentOperation = this.state.operation

            /* Cria uma cópia dos valores para evitar mutação direta do estado. */
            const values = [...this.state.values]
            try {
                /* ATENÇÃO: O uso de 'eval()' é perigoso e não recomendado.
                   Ele executa uma string como código JavaScript. */
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            } catch(e) {
                /* Em caso de erro, mantém o primeiro valor. */
                values[0] = this.state.values[0]
            }

            /* Reseta o segundo valor para 0. */
            values[1] = 0

            /* Atualiza o estado com o resultado da operação. */
            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }

    /* O método addDigit() adiciona um dígito ou ponto decimal ao visor. */
    addDigit(n) {
        /* Impede a adição de múltiplos pontos decimais. */
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }

        /* Verifica se o visor deve ser limpo antes de adicionar o dígito. */
        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay
        /* Define o valor atual do visor, limpando-o se necessário. */
        const currentValue = clearDisplay ? '' : this.state.displayValue
        /* Concatena o novo dígito ao valor do visor. */
        const displayValue = currentValue + n
        /* Atualiza o estado com o novo valor no visor e desativa a flag de limpeza. */
        this.setState({ displayValue, clearDisplay: false })

        /* Se o dígito não for um ponto, atualiza o array de valores. */
        if (n !== '.') {
            /* Pega o índice do valor atual (0 ou 1). */
            const i = this.state.current
            /* Converte o valor do visor para um número. */
            const newValue = parseFloat(displayValue)
            /* Cria uma cópia do array de valores. */
            const values = [...this.state.values]
            /* Atualiza o valor no índice correto. */
            values[i] = newValue
            /* Atualiza o estado com o novo array de valores. */
            this.setState({ values })
            /* Exibe o array de valores no console para depuração. */
            console.log(values)
        }
    }

    /* O método render() é obrigatório e retorna o JSX para ser exibido. */
    render() {
        return (
            /* O elemento principal da calculadora. */
            <div className="calculator">
                {/* Componente que exibe o valor do visor. */}
                <Display value={this.state.displayValue} />
                {/* Botões da calculadora, cada um com suas propriedades. */}
                <Button label="AC" click={this.clearMemory} triple />
                <Button label="/" click={this.setOperation} operation />
                <Button label="7" click={this.addDigit} />
                <Button label="8" click={this.addDigit} />
                <Button label="9" click={this.addDigit} />
                <Button label="*" click={this.setOperation} operation />
                <Button label="4" click={this.addDigit} />
                <Button label="5" click={this.addDigit} />
                <Button label="6" click={this.addDigit} />
                <Button label="-" click={this.setOperation} operation />
                <Button label="1" click={this.addDigit} />
                <Button label="2" click={this.addDigit} />
                <Button label="3" click={this.addDigit} />
                <Button label="+" click={this.setOperation} operation />
                <Button label="0" click={this.addDigit} double />
                <Button label="." click={this.addDigit} />
                <Button label="=" click={this.setOperation} operation />
            </div>
        )
    }
}











