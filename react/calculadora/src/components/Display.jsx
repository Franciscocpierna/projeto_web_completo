import React from 'react'
import './Display.css'

export default props =>
    <div className="display">{props.value}</div>


/*
O que o código faz
export default props => ...: Isso cria um componente funcional anônimo. A função recebe um objeto chamado props como argumento. O export default torna este componente disponível para ser importado e usado em outros arquivos, como no seu Calculator.jsx.

<div className="display">{props.value}</div>: Este é o código JSX que o componente retorna.

Cria uma div com a classe CSS display.

Dentro da div, {props.value} é uma expressão JavaScript. Ela pega a propriedade value do objeto props e exibe seu valor na tela.

Em resumo, a única responsabilidade deste componente é receber um valor (como um número ou uma string) e exibi-lo dentro de uma div estilizada.

Quando você usa <Display value={this.state.displayValue} /> no seu componente Calculator, o valor de this.state.displayValue é passado para o componente Display através do props.value, e o resultado é exibido no visor da calculadora.




*/