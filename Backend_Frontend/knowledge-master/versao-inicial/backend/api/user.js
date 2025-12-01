const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    // 1. Carrega as funções de validação (necessárias para 'save')
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation //require('./validation')

    // 2. Define a função de encriptação da senha (privada)
    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    // --- FUNÇÃO DE SALVAR/ATUALIZAR USUÁRIO ---
    const save = async (req, res) => {
        const user = { ...req.body } 
        
        // Verifica se é uma atualização (ID na URL)
        if (req.params.id) {
            user.id = req.params.id
        }

        try {
            // Validações
            existsOrError(user.name, 'Nome não informado')
            existsOrError(user.email, 'E-mail não informado')

            // Validações de senha (necessárias apenas para criação ou se a senha for alterada)
            if (!user.id || user.password) {
                existsOrError(user.password, 'Senha não informada')
                existsOrError(user.confirmPassword, 'Confirmação de Senha inválida')
                equalsOrError(user.password, user.confirmPassword, 'Senhas não conferem')
            }
            
            // 3. Verificação de Usuário Duplicado (Apenas na Inclusão)
            if (!user.id) {
                const userFromDB = await app.db('users')
                    .where({ email: user.email }).first()
                notExistsOrError(userFromDB, 'Usuário já cadastrado')
            }
        } catch(msg) {
            return res.status(400).send(msg) // Retorna o erro de validação
        }

        // Encripta a senha e remove a confirmação antes de salvar
        if (user.password) {
            user.password = encryptPassword(user.password)
        }
        delete user.confirmPassword
        
        // 4. Lógica de Atualização vs. Inserção
        if (user.id) {
            app.db('users')
                .update(user)
                .where({ id: user.id })
                // ATENÇÃO: Adicionamos 'return' para garantir que a função finalize aqui
                .then(_ => res.status(204).send()) 
                .catch(err => res.status(500).send(err)) 
        } else {
            app.db('users')
                .insert(user)
                // ATENÇÃO: Adicionamos 'return' para garantir que a função finalize aqui
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }

        // Removemos todo o código extra que estava aqui, como a definição de 'get'
    }

    // --- FUNÇÃO DE LISTAR USUÁRIOS (Corrigida e Separada) ---
    // Esta é a função que você perguntou anteriormente, agora isolada
    const get = (req, res) => {
        app.db('users')
            .select('id', 'name', 'email', 'admin')
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }
    
    // 5. Retorna ambas as funções
    return { save, get }
}