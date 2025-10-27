const { db } = require('./.env')

module.exports = {
	client: 'postgresql',
	connection: db, //
	connection: {
		database: 'Knowledge_final',
		user: 'postgres',
		password: 'pierna'
	},
	pool: {
		min: 2,
		max: 10
	},
	migrations: {
		tableName: 'knex_migrations'
	}
};
