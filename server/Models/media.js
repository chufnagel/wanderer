const db = require("../db");
const Media = {};

Media.retrieveMediaByUserId = userId => {
  return db("media")
    .whereIn("user_id", userId)
    .select("*")
    .then(media => media)
    .catch(err => console.error(err));
};

module.exports = Media;
