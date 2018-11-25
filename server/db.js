const environment = process.env.NODE_ENV || "development";
const config = require("./knexfile")[environment];
const knex = require("knex")(config);

module.exports = knex;

// We will need the line below during deployment, but during development,
// one can choose to connect via the command line.
// knex.migrate.latest([connection]);
