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
       host: 'localhost',       // ⬅️ CRUCIAL: Adicionado o Host para evitar Timeouthost: '127.0.0.1',
       user: 'postgres',                        // ⬅️ Adicionado a Porta padrão do PostgreSQL (Recomendado)port: 5432,
       database: 'knowledge',   // NOME CONFIRMADO: Usando 'knowledge'
       password: 'pierna'       
    },
    pool: { min: 2, max: 20 },
    migrations: {
        tableName: 'knex_migrations'
    }
};





/*
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

*/