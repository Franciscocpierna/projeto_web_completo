// Importa o tipo 'ReactNode' do React, que representa qualquer coisa que o React possa renderizar (texto, elementos, outros componentes, etc.)
import { ReactNode } from 'react';

// Define a interface para as propriedades (props) do componente Titulo
interface TituloProps {
    // 'children' é uma propriedade especial do React que representa o conteúdo aninhado dentro do componente
    children: ReactNode
}

// O componente funcional 'Titulo' que recebe as propriedades definidas acima
export default function Titulo(props: TituloProps) {
    return (
        // Um contêiner flexível que alinha seu conteúdo verticalmente no centro
        <div className="flex flex-col justify-center">
            {/* O cabeçalho (h1) que exibe o conteúdo passado como 'children' */}
            <h1 className="px-5 py-2 text-2xl">
                {props.children}
            </h1>
            {/* Uma linha horizontal para atuar como um separador, estilizada com borda roxa */}
            <hr className="border-2 border-purple-500" />
        </div>
    )
}