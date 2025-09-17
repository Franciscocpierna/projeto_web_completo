interface EntradaProps {
    tipo?: 'text' | 'number'
    texto: string
    //valor: any
    valor: string | number
    somenteLeitura?: boolean
    className?: string
    valorMudou?: (valor: string | number) => void
}

export default function Entrada(props: EntradaProps) {
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-2">
                {props.texto}
            </label>
            <input
                type={props.tipo ?? 'text'}
                value={props.valor}
                readOnly={props.somenteLeitura}
                onChange={e => {
                    const valor = props.tipo === 'number'
                        ? +e.target.value // converte para número
                        : e.target.value
                    props.valorMudou?.(valor)
                }}
                className={`
                    border border-purple-500 rounded-lg
                    focus:outline-none bg-gray-100 px-4 py-2
                    ${props.somenteLeitura ? '' : 'focus:bg-white'}
                `}
            />
        </div>
    )
}