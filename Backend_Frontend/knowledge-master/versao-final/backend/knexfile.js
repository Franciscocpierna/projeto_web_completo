/*const { db } = require('./.env')

module.exports = {
	client: 'postgresql',
	connection: db,
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'knex_migrations'
	}
};
*/

const { db } = require('./.env')

module.exports = {
	client: 'postgresql',
	connection:{
		//host: '127.0.0.1', // ADICIONE ESTA LINHA! por IA
		database: 'knowledge_final',
		user: 'postgres',
		password: 'pierna' 
	},	
	pool: {
		min: 2,
		max: 10,
		acquireTimeoutMillis: 30000,
	    idleTimeoutMillis: 30000
	},
	migrations: {
		tableName: 'knex_migrations'
	}
};
