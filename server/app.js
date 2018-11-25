const express = require("express");
const path = require("path");
const opn = require("opn");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const morgan = require("morgan");
const cors = require("cors");
const busboy = require("connect-busboy");
const busboyBodyParser = require("busboy-body-parser");
// const auth = require("./routes/auth");
const router = require("./routes");
const logger = require("./lib/logger");
const config = require("./lib/config");

const app = express();

if (process.env.NODE_ENV === "development") {
  console.log("Using webpack dev and hot middleware");
  const webpack = require("webpack");
  const webpackConfig = require("../config/webpack.dev");
  const compiler = webpack(webpackConfig);
  app.use(
    require("webpack-dev-middleware")(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath,
    }),
  );
}

// Apply middleware
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(compression("gzip"));
app.use(
  morgan("combined", {
    stream: logger.stream,
    skip(req, res) {
      return res.statusCode < 400;
    },
  }),
);
app.use(cors());
app.use(express.static(path.join(__dirname, "../dist/")));
app.use(busboy());
app.use(busboyBodyParser({ limit: "50mb" }));
app.use("/", router);

// development error handler
// will print stack trace
if (app.get("env") === "development") {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err,
    });
  });
}

// production error handler
// no stack traces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {},
  });
});

module.exports = app;
