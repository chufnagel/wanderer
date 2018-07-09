const express = require("express");
const path = require("path");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const logger = require("morgan");
const cors = require("cors");
const busboy = require('connect-busboy')
const busboyBodyParser = require('busboy-body-parser')
const router = require("./routes");
const { getPointsOfInterest, getAttractions } = require("./helperFunctions");

const {
  log,
  chalkSuccess,
  chalkError,
  chalkWarning,
  chalkInfo
} = require("../chalkpresets");

const PORT = process.env.PORT || 3000;

const app = express();

// Apply middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(compression("gzip"));
app.use(logger("dev"));
app.use(cors());
app.use(express.static(path.join(__dirname, "../dist/")));
app.use(busboy());
app.use(busboyBodyParser());
app.use("/", router);

// calls the helper function to query Google Places API for points of interest for given location
// app.post("/getPointsOfInterest", (req, res) => {
//   getPointsOfInterest(req.body.location, (err, data) => {
//     if (err) {
//       console.log("server error getting points of interest from API", err);
//     } else {
//       res.send(data);
//     }
//   });
// });

app.post("/getAttractions", (req, res) => {
  getAttractions(req.body.location, data => {
    res.send(data);
  });
});

// development error handler
// will print stack trace
if (app.get("env") === "development") {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stack traces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});

app.listen(PORT, () => {
  log(chalkSuccess(`Port ${PORT} is lit fam 🔥 🔥 🔥`));
});
