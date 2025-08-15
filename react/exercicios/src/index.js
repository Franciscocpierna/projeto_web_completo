
import React from 'react'; // Importa a biblioteca React, necessária para JSX funcionar
import ReactDOM from 'react-dom/client'; // Importa o novo método de renderização do React 18+
import Primeiro from './componentes/Primeiro';
import BBomDia from './componentes/BomDia';
import { BoaTarde, BoaNoite } from './componentes/Multiplos'
import Pai from './componentes/Pai'; // Importa o componente Pai
import Filho from './componentes/Filho'; // Importa o componente Filho


// Cria a raiz do React: O ReactDOM.createRoot() cria uma raiz React. Essa raiz é a principal API de renderização para as novas versões do React (a partir da 18). Ela permite que o React gerencie de forma eficiente a árvore de componentes da sua aplicação e atualize a interface do usuário (UI).

// Em resumo, essa linha de código diz ao React: "Encontre a <div> com o id root no HTML e 
// Cria a raiz do React, vinculando ao elemento com id 'root' no HTML
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o conteúdo JSX dentro da div root
root.render(
    <div>
        <h1>React</h1> {/* Título principal da página */}
        <Primeiro />
        <BBomDia nome="Mario"/>
        <BoaTarde nome="Ana" />
        <BoaNoite nome="Bia"/>
        <Pai nome="Paulo" sobrenome="Silva"> {/* Componente Pai recebe props nome e sobrenome */}
            <Filho nome="Pedro" /> {/* Componente Filho recebe prop nome */}
            <Filho nome="Paulo" />
            <Filho nome="Carla" />
        </Pai>
    </div>
);