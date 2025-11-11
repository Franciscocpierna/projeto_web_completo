// Update with your config settings.

/*module.exports = {
   client: 'postgresql',
    connection: {
      database: 'knowledge',
      user:     'postgres',
      password: 'pierna'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  };*/

  module.exports = {
    client: 'postgresql',
    connection: {
        host: '127.0.0.1',       // ⬅️ CRUCIAL: Adicionado o Host para evitar Timeout
        port: 5432,              // ⬅️ Adicionado a Porta padrão do PostgreSQL (Recomendado)
        database: 'knowledge',   // NOME CONFIRMADO: Usando 'knowledge'
        user: 'postgres',
        password: 'pierna'       
    },
    pool: {
        min: 2,
        max: 20,
        // Opcional: debug para rastrear conexões
    afterCreate: (conn, done) => {
      conn.query('SET timezone="UTC";', (err) => {
        done(err, conn);
      });
    }
        

    },
    migrations: {
        tableName: 'knex_migrations'
    }
};
