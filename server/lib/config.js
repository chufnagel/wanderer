const dotenv = require("dotenv");

const { log, chalkFailure, chalkInfo, chalkSuccess } = require("./chalkpresets");

// import credentials from .env file
// const config = dotenv.config({ debug: process.env.DEBUG });
const config = dotenv.config({ debug: process.env.DEBUG });
if (config.error) {
  chalkFailure("Invalid Google Places API key supplied! Check your .env file");
  throw config.error;
} else {
  chalkInfo(`Google Places API Key found`);
}

module.exports = config;
