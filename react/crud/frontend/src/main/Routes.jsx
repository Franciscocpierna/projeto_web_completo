import React from 'react'
// Importa os componentes de roteamento necessários para a versão 6 do React Router.
// 'Routes' e 'Route' definem as rotas, e 'Navigate' é para redirecionamento.
import { Routes, Route, Navigate } from 'react-router-dom'

// Importa os componentes da sua aplicação que serão renderizados em cada rota.
import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

// Exporta um componente funcional que define as rotas.
export default props => (
    // O componente 'Routes' funciona como um container que agrupa todas as suas rotas.
    // Ele garante que apenas a primeira rota que corresponder ao 'path' seja renderizada.
    <Routes>
        {/*
          Esta 'Route' define a rota principal.
          - 'path="/"' significa que ela corresponde à URL raiz do seu site.
          - 'element={<Home />}' especifica o componente JSX que será renderizado para esta rota.
        */}
        <Route path='/' element={<Home />} />
        
        {/*
          Esta 'Route' define a rota para a página de usuários.
          - 'path="/users"' corresponde à URL '/users'.
          - 'element={<UserCrud />}' renderiza o componente 'UserCrud' para esta rota.
        */}
        <Route path='/users' element={<UserCrud />} />

        {/*
          Esta é uma rota de 'redirecionamento'.
          - 'path="*"' atua como um 'curinga' (qualquer outro caminho não encontrado).
          - 'element={<Navigate to="/" />}' redireciona o usuário para a página inicial
            sempre que ele tentar acessar uma URL que não existe na sua aplicação.
        */}
        <Route path='*' element={<Navigate to='/' />} />
    </Routes>
)