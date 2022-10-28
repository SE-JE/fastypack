
/* import package */
import { config } from 'dotenv';
import knex from 'knex'

/* init package */
config();

export const dbConfig = {
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

export const dbConnection = knex(dbConfig);