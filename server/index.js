// const opn = require("opn");
require("dotenv").config();

const PORT = process.env.PORT || 8080;

const { log, chalkSuccess } = require("./lib/chalkpresets");

const app = require("./app");

if (process.env.NODE_ENV === "production") {
  app.listen(PORT, () => {
    log(chalkSuccess(`Wanderer running on port ${PORT}`));
    // opn(`http://localhost:${PORT}`);
  });
} else {
  app.listen(PORT, () => {
    log(chalkSuccess(`Wanderer running on port ${PORT}`));
  });
}
