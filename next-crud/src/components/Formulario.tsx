/// Imports necessários para o componente
import Botao from "./Botao";
import Entrada from "./Entrada";
import { useState } from "react";
import Cliente from "../core/Cliente";

// Define as propriedades (props) que o componente Formulario pode receber
interface FormularioProps {
    // O objeto Cliente a ser exibido ou editado
    cliente: Cliente
    // Uma função chamada quando o cliente é salvo/alterado
    clienteMudou?: (cliente: Cliente) => void
    // Uma função para lidar com o cancelamento
    cancelado?: () => void
    // Uma flag para indicar se a operação de salvar está em andamento
    isSaving?: boolean
}

// Componente principal do formulário
export default function Formulario(props: FormularioProps) {
    // Pega o ID do cliente das props, ou define como nulo se for um novo cliente
    const id = props.cliente?.id ?? null
    
    // Define o estado local para o nome do cliente usando o hook useState
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    
    // Define o estado local para a idade do cliente
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <div>
            {/* Renderização condicional: se o cliente tiver um ID, mostra o campo de código */}
            {id ? (
                <Entrada
                    somenteLeitura // Campo somente para visualização
                    texto="Código"
                    valor={id}
                    className="mb-5"
                />
            ) : false}
            
            {/* Campo de entrada para o Nome do cliente */}
            <Entrada
                texto="Nome"
                valor={nome}
                valorMudou={valor => setNome(String(valor))} // Atualiza o estado 'nome'
                className="mb-5"
            />
            
            {/* Campo de entrada para a Idade do cliente */}
            <Entrada
                texto="Idade"
                tipo="number"
                valor={idade}
                valorMudou={valor => setIdade(Number(valor))} // Atualiza o estado 'idade'
            />
            
            <div className="flex justify-end mt-7">
                {/* Botão de Salvar/Alterar */}
                <Botao cor="blue" className="mr-2"
                    // Cria um novo objeto Cliente com os dados atuais e o passa para a função de callback
                    onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}
                    disabled={props.isSaving} // Desabilita o botão enquanto estiver salvando
                >
                    {/* Texto do botão muda dependendo se é uma edição ou um novo cliente */}
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                
                {/* Botão de Cancelar */}
                <Botao onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}