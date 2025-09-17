import { db } from '../config'
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
import Cliente from "../../core/Cliente";
import ClienteRepositorio from "../../core/ClienteRepositorio";

export default class ColecaoCliente implements 

ClienteRepositorio {

    #conversor = {
        toFirestore(cliente: Cliente) {
            return {
                nome: cliente.nome,
                idade: cliente.idade,
            }
        },
        fromFirestore(snapshot: QueryDocumentSnapshot<DocumentData>, options: SnapshotOptions): Cliente {
            const dados = snapshot.data(options)
            return new Cliente(dados.nome, dados.idade, snapshot.id)
        }
    }

    private colecao() {
        return collection(db, 'clientes').withConverter(this.#conversor)
    }

    async salvar(cliente: Cliente): Promise<Cliente> {
        if (cliente?.id) {
            const clienteDoc = doc(db, 'clientes', cliente.id).withConverter(this.#conversor)
            await setDoc(clienteDoc, cliente)
            return cliente
        } else {
            const docRef = await addDoc(this.colecao(), cliente)
            const docSnap = await getDoc(docRef.withConverter(this.#conversor))
            return docSnap.data()!
        }
    }

    async excluir(cliente: Cliente): Promise<void> {
        if (cliente?.id) {
            const clienteDoc = doc(db, 'clientes', cliente.id)
            await deleteDoc(clienteDoc)
        }
    }

    async obterTodos(): Promise<Cliente[]> {
        const clientesCol = this.colecao()
        const clientesSnapshot = await getDocs(clientesCol)
        return clientesSnapshot.docs.map(doc => doc.data()) ?? []
    }
}