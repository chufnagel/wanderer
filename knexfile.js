const path = require("path");

module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "127.0.0.1",
      user: "root",
      password: "plantlife",
      database: "wanderer"
    },
    useNullAsDefault: true,
    pool: {
      min: 1,
      max: 9
    },
    migrations: {
      directory: path.join(__dirname, "./migrations")
    },
    seeds: {
      seeds: path.join(__dirname, "./seeds")
    }
  },
  test: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      database: "wanderer-test",
      user: "bodzin",
      port: 5432
    },
    migrations: {
      directory: path.join(__dirname, "./migrations")
    },
    seeds: {
      seeds: path.join(__dirname, "./seeds/test")
    }
  },
  developmentPostgres: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      database: "wanderer",
      user: "bodzin",
      port: 5432
    },
    useNullAsDefault: true,
    pool: {
      min: 1,
      max: 9
    },
    migrations: {
      directory: path.join(__dirname, "./migrations")
    },
    seeds: {
      directory: path.join(__dirname, "./seeds/development")
    }
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "./migrations")
    },
    seeds: {
      directory: path.join(__dirname, "./seeds/production")
    }
  }
};
