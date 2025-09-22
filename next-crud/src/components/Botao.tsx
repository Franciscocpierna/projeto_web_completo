
import { ReactNode } from "react";

interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    className?: string
    children: ReactNode
    onClick?: () => void
    disabled?: boolean // Adicionamos a propriedade `disabled`
}

export default function Botao(props: BotaoProps) {
    const cor = props.cor ?? 'gray'

    const cores = {
        green: 'bg-gradient-to-r from-green-400 to-green-700',
        blue: 'bg-gradient-to-r from-blue-400 to-blue-700',
        gray: 'bg-gradient-to-r from-gray-400 to-gray-700',
    }

    return (
        <button
            onClick={props.onClick}
            className={`
                ${cores[cor]}
                text-white px-4 py-2 rounded-md 
                ${props.className}
                ${props.disabled ? 'opacity-50 cursor-not-allowed' : ''}
            `}
            disabled={props.disabled} // Passamos a propriedade `disabled` para o elemento <button>
        >
            {props.children}
        </button>
    )
}