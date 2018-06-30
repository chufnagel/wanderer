module.exports = {
  test: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      database: 'wanderer-test',
      user: 'bodzin',
      port: 5432
    },
    migrations: {
      directory: __dirname + './migrations'
    },
    seeds: {
      seeds: __dirname + './seeds/test'
    }
  },
    development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      database: 'wanderer',
      user: 'bodzin',
      port: 5432
    },
    useNullAsDefault: true,
    pool: {
      min: 1,
      max: 9
    },
    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds/development"
    }
  },
  production: {
    client:  'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + './migrations'
    },
    seeds: {
      directory: __dirname + './seeds/production'
    }
  }
};
