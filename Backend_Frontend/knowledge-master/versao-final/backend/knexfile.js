const { db } = require('./.env');
 
module.exports = {
  client: 'postgresql',
  connection: {
    host: db.host || 'localhost',
    port: db.port || 5432,
    database: db.database || 'knowledge_final',
    user: db.user || 'postgres',
    password: db.password || 'pierna',
  },
  pool: {
    min: 0,
    max: 5,
    acquireTimeoutMillis: 60000,
    idleTimeoutMillis: 30000,
  },
  migrations: {
    tableName: 'knex_migrations',
  },
};