const connection = require("../knexfile.js").development;

const knex = require('knex')(connection);

module.exports = knex;

// We will need the line below during deployment, but during development,
// one can choose to connect via the command line.
// knex.migrate.latest([connection]);

