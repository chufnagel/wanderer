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
const router = require("./routes");
let { getPointsOfInterest, getAttractions } = require("./helperFunctions");

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
app.use(bodyParser.json());
app.use(cookieParser());
app.use(compression());
app.use(logger("dev"));
app.use(cors());
app.use(express.static(path.join(__dirname, "../dist/")));
app.use("/", router);



app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Server error");
});
// app.use(express.static("dist"));

// calls the helper function to query Google Places API for points of interest for given location
app.post("/getPointsOfInterest", (req, res) => {
  getPointsOfInterest(req.body.location, (err, data) => {
    if (err) {
      console.log("server error getting points of interest from API", err);
    } else {
      res.send(data);
    }
  });
});

// calls the helper function to query Atlas Obscura API for obscure attractions for given location
app.post("/getAttractions", (req, res) => {
  getAttractions(req.body.location, (data) => {
    res.send(data);
  });
});

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Server error");
// });

app.listen(PORT, () => {
  log(chalkSuccess(`Port ${PORT} is lit fam 🔥 🔥 🔥`));
});
