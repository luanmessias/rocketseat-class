import { knex as setupKnex, Knex } from 'knex'
import { env } from './env'

export const dbConfig: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    directory: './db/migrations',
    extension: 'ts',
  },
}

export const knex = setupKnex(dbConfig)
