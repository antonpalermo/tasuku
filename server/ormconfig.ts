const mode = process.env.NODE_ENV || 'development'

export default {
  type: 'postgres',
  logging: !mode,
  synchronize: !mode,
  host: process.env.APP_DATABASE_HOST,
  port: process.env.APP_DATABASE_PORT,
  username: process.env.APP_DATABASE_USERNAME,
  password: process.env.APP_DATABASE_PASSWORD,
  database: process.env.APP_DATABASE_NAME,
  entities: ['src/entities/**/*.ts'],
  migrations: ['src/migrations/**/*.ts'],
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migrations',
  },
}
