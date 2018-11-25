const path = require("path");

const config = require("./lib/config");

const { RDS_HOSTNAME, RDS_USERNAME, RDS_PASSWORD, RDS_DB_NAME, RDS_PORT, DB } = process.env;

module.exports = {
  development: {
    client: DB,
    connection: {
      host: RDS_HOSTNAME,
      user: RDS_USERNAME,
      password: RDS_PASSWORD,
      database: RDS_DB_NAME,
      port: RDS_PORT,
    },
    useNullAsDefault: true,
    pool: {
      min: 1,
      max: 9,
    },
    migrations: {
      directory: path.join(__dirname, "./migrations"),
    },
    seeds: {
      seeds: path.join(__dirname, "./seeds"),
    },
  },
  production: {
    client: DB,
    connection: {
      host: RDS_HOSTNAME,
      user: RDS_USERNAME,
      password: RDS_PASSWORD,
      database: RDS_DB_NAME,
      port: RDS_PORT,
    },
    useNullAsDefault: true,
    pool: {
      min: 1,
      max: 9,
    },
    migrations: {
      directory: path.join(__dirname, "./migrations"),
    },
    seeds: {
      seeds: path.join(__dirname, "./seeds"),
    },
  },
};
