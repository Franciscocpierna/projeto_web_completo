// no arquivo useClientes.ts

import { useEffect, useState } from "react"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"

export default function useClientes() {
    const repo: ClienteRepositorio = new ColecaoCliente()

    const [tabelaVisivel, setTabelaVisivel] = useState(true)
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        obterTodos()
    }, [])

    function obterTodos() {
        repo.obterTodos().then(clientes => {
            setClientes(clientes)
            setTabelaVisivel(true)
        })
    }

    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente)
        setTabelaVisivel(false)
    }

    async function excluirCliente(cliente: Cliente) {
        try {
            await repo.excluir(cliente)
            setClientes(clientes.filter(c => c.id !== cliente.id));
        } catch (e) {
            alert("Não foi possível excluir o cliente. Verifique as regras do Firebase.");
        } finally {
            setTabelaVisivel(true)
        }
    }

    function novoCliente() {
        setCliente(Cliente.vazio())
        setTabelaVisivel(false)
        setIsSaving(false)
    }

    async function salvarCliente(cliente: Cliente) {
        setIsSaving(true);
        try {
            const clienteSalvo = await repo.salvar(cliente);
            const clientesAtualizados = cliente.id
                ? clientes.map(c => c.id === clienteSalvo.id ? clienteSalvo : c)
                : [...clientes, clienteSalvo];

            setClientes(clientesAtualizados);
        } catch (e) {
            alert("Não foi possível salvar o cliente. Verifique as regras do Firebase.");
        } finally {
            setIsSaving(false);
            setTabelaVisivel(true);
        }
    }

    return {
        cliente,
        clientes,
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        tabelaVisivel,
        setTabelaVisivel,
        isSaving
    }
}