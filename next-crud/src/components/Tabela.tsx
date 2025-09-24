import Cliente from "../core/Cliente";
import { IconeEdicao, IconeLixo } from "./Icones";

// Define as propriedades que o componente Tabela pode receber
interface TabelaProps {
    // A lista de clientes a ser exibida na tabela
    clientes: Cliente[]
    // Função opcional para lidar com a seleção (edição) de um cliente
    clienteSelecionado?: (cliente: Cliente) => void
    // Função opcional para lidar com a exclusão de um cliente
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Tabela(props: TabelaProps) {

    // Verifica se as funções de edição ou exclusão foram passadas,
    // para decidir se a coluna de 'Ações' deve ser exibida
    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

    // Renderiza o cabeçalho da tabela
    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {/* Renderiza a coluna 'Ações' apenas se necessário */}
                {exibirAcoes ? <th className="p-4">Ações</th> : false}
            </tr>
        )
    }

    // Renderiza os dados (as linhas) da tabela
    function renderizarDados() {
        // Mapeia a lista de clientes para criar uma linha (<tr>) para cada um
        return props.clientes?.map((cliente, i) => {
            return (
                <tr 
                    // Usa o ID do cliente como chave para o React identificar a linha
                    key={cliente.id}
                    // Alterna as cores de fundo para melhorar a legibilidade
                    className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}
                >
                    <td className="text-left p-4">{cliente.id}</td>
                    <td className="text-left p-4">{cliente.nome}</td>
                    <td className="text-left p-4">{cliente.idade}</td>
                    {/* Renderiza os botões de ação se necessário */}
                    {exibirAcoes ? renderizarAcoes(cliente) : false}
                </tr>
            )
        })
    }

    // Renderiza os botões de ação para cada cliente
    function renderizarAcoes(cliente: Cliente) {
        return (
            <td className="flex justify-center">
                {/* Botão de Edição, renderizado apenas se a função 'clienteSelecionado' existir */}
                {props.clienteSelecionado ? (
                    <button onClick={() => props.clienteSelecionado?.(cliente)} className={`
                        flex justify-center items-center
                        text-green-600 rounded-full p-2 m-1
                        hover:bg-purple-50
                    `}>
                        {IconeEdicao}
                    </button>
                ) : false}
                {/* Botão de Exclusão, renderizado apenas se a função 'clienteExcluido' existir */}
                {props.clienteExcluido ? (
                    <button onClick={() => props.clienteExcluido?.(cliente)} className={`
                        flex justify-center items-center
                        text-red-500 rounded-full p-2 m-1
                        hover:bg-purple-50
                    `}>
                        {IconeLixo}
                    </button>
                ) : false}
            </td>
        )
    }

    // Retorna a estrutura final da tabela
    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-800
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}