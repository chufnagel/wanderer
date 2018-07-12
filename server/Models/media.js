const db = require("../db");

const Media = {};

Media.retrieveMediaByUserId = (userId, location) => {
  console.log("media location", location);

  if (location) {
    return db("media")
      .whereIn("user_id", userId)
      .where("country_id", location[0].country_id)
      .select("*")
      .then(media => media)
      .catch(err => console.error(err));
  }
    return db("media")
      .whereIn("user_id", userId)
      .select("*")
      .then(media => {
        return media;
      })
      .catch(err => console.error(err));

};

Media.addMediaByUserIdAndCountryId = (userId, locationId, imageinfo) => {
  console.log('user_id', userId)
  console.log('locationId', locationId)
  console.log('imageinfo', imageinfo)
  return db("media")
    .insert({
      user_id: userId,
      country_id: locationId[0].country_id,
      image_url: imageinfo.Location
    })
    .select("*")
    .then(media => media)
    .catch(err => console.error(err));
};

module.exports = Media;
