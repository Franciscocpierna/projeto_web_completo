// Importa o React e a classe Component da biblioteca 'react'.
import React, { Component } from 'react'
// Importa o Axios para fazer requisições HTTP a uma API.
import axios from 'axios'
// Importa o componente 'Main' que será a base da página.
import Main from '../template/Main'

// Define um objeto de propriedades para o cabeçalho (Header).
const headerProps = {
    icon: 'users', // O ícone a ser exibido.
    title: 'Usuários', // O título principal da página.
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!' // O subtítulo.
}

// Define a URL base para a API que gerencia os usuários.
const baseUrl = 'http://localhost:3001/users'
// Define o estado inicial do componente.
const initialState = {
    user: { name: '', email: '' }, // Objeto 'user' com campos vazios para o formulário.
    list: [] // Array 'list' vazio para armazenar a lista de usuários.
}

// Define o componente de classe 'UserCrud', que herda de 'Component'.
export default class UserCrud extends Component {

    // Inicializa o estado do componente com os valores de 'initialState'.
    state = { ...initialState }

    // Este é um método de ciclo de vida antigo, chamado antes do componente ser montado.
    // É usado para carregar os dados da API.
    // **Nota:** A prática atual no React é usar 'componentDidMount'.
    componentWillMount() {
        // Faz uma requisição GET para a 'baseUrl' e obtém a lista de usuários.
        axios(baseUrl).then(resp => {
            // Atualiza o estado do componente com os dados recebidos da API.
            this.setState({ list: resp.data })
        })
    }

    // Limpa o formulário, resetando o estado 'user' para o valor inicial.
    clear() {
        this.setState({ user: initialState.user })
    }

    // Salva ou atualiza um usuário.
    save() {
        // Pega o objeto 'user' do estado.
        const user = this.state.user
        // Determina o método HTTP ('put' para atualizar, 'post' para criar) baseado na existência de um 'id'.
        const method = user.id ? 'put' : 'post'
        // Determina a URL completa para a requisição.
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        // Executa a requisição HTTP com o método e URL corretos.
        axios[method](url, user)
            .then(resp => {
                // Obtém a lista de usuários atualizada após a resposta da API.
                const list = this.getUpdatedList(resp.data)
                // Atualiza o estado: limpa o formulário e atualiza a lista de usuários.
                this.setState({ user: initialState.user, list })
            })
    }

    // Retorna uma nova lista de usuários atualizada.
    getUpdatedList(user, add = true) {
        // Filtra a lista atual, removendo o usuário que foi alterado/removido.
        const list = this.state.list.filter(u => u.id !== user.id)
        // Se a flag 'add' for verdadeira (para salvar/criar), adiciona o novo usuário no início da lista.
        if (add) list.unshift(user)
        // Retorna a nova lista.
        return list
    }

    // Atualiza o estado do formulário conforme o usuário digita.
    updateField(event) {
        // Cria uma cópia do objeto 'user' do estado para evitar mutação direta.
        const user = { ...this.state.user }
        // Atualiza a propriedade do usuário (ex: 'name' ou 'email') com o novo valor digitado.
        user[event.target.name] = event.target.value
        // Atualiza o estado com o novo objeto 'user'.
        this.setState({ user })
    }

    // Método que renderiza o formulário de inclusão/edição de usuários.
    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                                name="name"
                                // Vincula o valor do input ao estado do componente.
                                value={this.state.user.name}
                                // Chama 'updateField' a cada alteração no input.
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className="form-control"
                                name="email"
                                value={this.state.user.email}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o e-mail..." />
                        </div>
                    </div>
                </div>

                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            // Chama o método 'save' ao clicar no botão.
                            onClick={e => this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary ml-2"
                            // Chama o método 'clear' ao clicar no botão.
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    // Carrega um usuário no formulário para edição.
    load(user) {
        this.setState({ user })
    }

    // Remove um usuário.
    remove(user) {
        // Faz uma requisição DELETE para a API.
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            // Obtém a lista atualizada, passando 'false' para não adicionar o usuário de volta.
            const list = this.getUpdatedList(user, false)
            // Atualiza a lista no estado.
            this.setState({ list })
        })
    }

    // Renderiza a tabela de usuários.
    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Chama 'renderRows' para preencher as linhas da tabela. */}
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    // Renderiza as linhas da tabela a partir da lista no estado.
    renderRows() {
        return this.state.list.map(user => {
            return (
                // 'key' é essencial para o React identificar cada item da lista.
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning"
                            // Chama 'load' para editar o usuário ao clicar.
                            onClick={() => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                            // Chama 'remove' para excluir o usuário ao clicar.
                            onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }
    
    // Método principal de renderização do componente.
    render() {
        return (
            // Usa o componente 'Main' como container principal.
            <Main {...headerProps}>
                {/* Renderiza o formulário e a tabela dentro do 'Main'. */}
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}