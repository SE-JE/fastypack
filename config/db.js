require('dotenv').config()


exports.dbConfig = {
    client: 'mysql',
    connection: {
        host: String(process.env.DB_HOST ?? '127.0.0.1'),
        user: String(process.env.DB_USERNAME ?? 'root'),
        password: String(process.env.DB_PASSWORD ?? ''),
        database: String(process.env.DB_DATABASE ?? 'my_db'),
    },
    pool: { min: 0, max: 3 }, //Menggunakan fungsi pool agar menjaga koneksi ke DB tetep tersambung
    migrations: {
        directory: './database/migrations'
    },
    seeds: {
        directory: './database/seeds',
    },
}

exports.dbConnection = require('knex')(this.dbConfig);
