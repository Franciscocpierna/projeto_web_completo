// Importa o modelo de dados Cliente
import Cliente from "./Cliente";

// Exporta a interface ClienteRepositorio.
// Uma interface define o 'contrato' de como uma classe deve se comportar.
// Qualquer classe que "implementar" esta interface precisa obrigatoriamente
// ter os métodos 'salvar', 'excluir' e 'obterTodos' com as assinaturas corretas.
export default interface ClienteRepositorio {
    // Método para salvar ou atualizar um cliente.
    // Ele recebe um objeto Cliente e retorna uma Promise que resolve para um Cliente.
    salvar(cliente: Cliente): Promise<Cliente>
    
    // Método para excluir um cliente.
    // Ele recebe um objeto Cliente e retorna uma Promise que resolve para 'void' (nada),
    // indicando que a operação foi concluída.
    excluir(cliente: Cliente): Promise<void>
    
    // Método para obter todos os clientes.
    // Ele não recebe argumentos e retorna uma Promise que resolve para um array de Clientes.
    obterTodos(): Promise<Cliente[]>
}