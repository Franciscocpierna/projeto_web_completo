// Importa o arquivo de estilo CSS específico para este componente.
import './Nav.css'
// Importa a biblioteca principal do React.
import React from 'react'
// Importa o componente 'Link' da biblioteca React Router, usado para navegar entre as rotas.
import { Link } from 'react-router-dom'

// Exporta o componente funcional.
// Ele recebe as 'props' (propriedades) mas não as usa neste caso.
export default props =>
    // A tag <aside> é usada para o menu lateral, uma área de conteúdo secundária.
    <aside className="menu-area">
       {/*A tag <nav> é usada para definir a área de navegação. */} 
        <nav className="menu">
            {/* O componente Link substitui a tag <a> padrão do HTML. */}
            {/* Ele navega para a rota "/" (página inicial) sem recarregar a página. */}
            <Link to="/">
                {/* A tag <i> é usada para exibir um ícone (da fonte Font Awesome). */}
                <i className="fa fa-home"></i> Início
            </Link>
            
            {/* Este Link navega para a rota "/users" (página de usuários). */}
            <Link to="/users">
                <i className="fa fa-users"></i> Usuários
            </Link>
        </nav>
    </aside>