const express = require("express");
// const fs = require("fs");
// const http = require('http');
// const https = require('https');
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const logger = require("morgan");
const cors = require("cors");

const {
  log,
  chalkSuccess,
  chalkError,
  chalkWarning,
  chalkInfo
} = require("../chalkpresets");

const port = process.env.port || 3000;

const app = express();

// Apply middleware
app
  .use(bodyParser.json())
  .use(cookieParser())
  .use(compression())
  .use(logger("dev"))
  .use(cors())
  .use(express.static(path.join(__dirname, "../dist/")));

app.listen(port, () => {
  log(chalkSuccess(`Port ${port} is lit fam 🔥 🔥 🔥`));
});
