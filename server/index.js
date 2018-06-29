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
const { getPointsOfInterest } = require("./helperFunctions");
const router = require("./routes");

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

app.listen(PORT, () => {
  log(chalkSuccess(`Port ${PORT} is lit fam 🔥 🔥 🔥`));
});
