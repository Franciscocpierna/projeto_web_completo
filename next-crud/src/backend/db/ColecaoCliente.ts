// Importa a conexão com o banco de dados 'db' do arquivo de configuração
import { db } from '../config'

// Importa as funções necessárias da biblioteca do Firestore na versão 9
// collection: para referenciar uma coleção de documentos
// doc: para referenciar um documento específico
// getDocs: para buscar múltiplos documentos de uma coleção
// setDoc: para salvar/atualizar um documento com um ID específico
// addDoc: para adicionar um novo documento com um ID gerado automaticamente
// deleteDoc: para excluir um documento
// getDoc: para buscar um único documento
// DocumentData, QueryDocumentSnapshot, SnapshotOptions: tipos do TypeScript para garantir a segurança dos dados
import {
    collection,
    doc,
    getDocs,
    setDoc,
    addDoc,
    deleteDoc,
    getDoc,
    DocumentData,
    QueryDocumentSnapshot,
    SnapshotOptions
} from 'firebase/firestore'

// Importa a classe Cliente, que é o modelo de dados do seu projeto
import Cliente from "../../core/Cliente";

// Importa a interface ClienteRepositorio, que define o contrato (os métodos obrigatórios) para este repositório
import ClienteRepositorio from "../../core/ClienteRepositorio";

// Exporta a classe 'ColecaoCliente', que implementa (segue o contrato de) a interface ClienteRepositorio
export default class ColecaoCliente implements ClienteRepositorio {

    // Define um objeto conversor que traduz os dados entre a sua aplicação e o Firestore
    #conversor = {
        // toFirestore: converte um objeto Cliente para o formato que o Firestore salva (apenas nome e idade)
        toFirestore(cliente: Cliente) {
            return {
                nome: cliente.nome,
                idade: cliente.idade,
            }
        },
        // fromFirestore: converte os dados do Firestore de volta para um objeto Cliente, incluindo o ID do documento
        fromFirestore(snapshot: QueryDocumentSnapshot<DocumentData>, options: SnapshotOptions): Cliente {
            const dados = snapshot.data(options)
            return new Cliente(dados.nome, dados.idade, snapshot.id)
        }
    }

    // Método privado para obter uma referência à coleção 'clientes' no banco de dados, usando o conversor
    private colecao() {
        return collection(db, 'clientes').withConverter(this.#conversor)
    }

    // Método assíncrono para salvar um cliente no banco de dados
    async salvar(cliente: Cliente): Promise<Cliente> {
        // Se o cliente já tiver um ID, ele é um cliente existente e será atualizado
        if (cliente?.id) {
            const clienteDoc = doc(db, 'clientes', cliente.id).withConverter(this.#conversor)
            await setDoc(clienteDoc, cliente) // Usa setDoc para atualizar o documento
            return cliente
        } else {
            // Se o cliente não tiver um ID, ele é um novo cliente e será adicionado
            const docRef = await addDoc(this.colecao(), cliente) // Usa addDoc para criar um novo documento
            const docSnap = await getDoc(docRef.withConverter(this.#conversor)) // Pega o documento criado
            return docSnap.data()! // Retorna o novo cliente com o ID gerado pelo Firestore
        }
    }

    // Método assíncrono para excluir um cliente do banco de dados
    async excluir(cliente: Cliente): Promise<void> {
        // Se o cliente tiver um ID, o documento correspondente é excluído
        if (cliente?.id) {
            const clienteDoc = doc(db, 'clientes', cliente.id)
            await deleteDoc(clienteDoc) // Usa deleteDoc para excluir o documento
        }
    }

    // Método assíncrono para obter todos os clientes do banco de dados
    async obterTodos(): Promise<Cliente[]> {
        const clientesCol = this.colecao()
        const clientesSnapshot = await getDocs(clientesCol) // Busca todos os documentos da coleção
        // Mapeia os documentos para objetos Cliente e retorna a lista
        return clientesSnapshot.docs.map(doc => doc.data()) ?? []
    }
}