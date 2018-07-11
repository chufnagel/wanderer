const db = require("../db");

const Destinations = {};

Destinations.retrieveFavByUserId = (userId, cb) => {
  return db("favorite_destinations")
    .where({ user_id: userId })
    .then(destination_id => {
      const arr = destination_id.map(el => {
        return el.destination_id;
      });
      db("countries")
        .whereIn("country_id", arr)
        // db.query( "select * from `countries` where `country_id` IN "+ arr)
        .then(countries => {
          // console.log("country", countries);
          cb(countries);
        })
        .catch(err => console.error(err));
    })
    .catch(err => console.error(err));
};

Destinations.retrieveVisitedByUserId = (userId, cb) => {
  return db("visited_destinations")
    .where({ user_id: userId })
    .then(destination_id => {
      const arr = destination_id.map(el => {
        return el.destination_id;
      });
      db("countries")
        .whereIn("country_id", arr)
        // db.query( "select * from `countries` where `country_id` IN "+ arr)
        .then(countries => {
          // console.log("country", countries);
          cb(countries);
        })
        .catch(err => console.error(err));
    })
    .catch(err => console.error(err));
};

Destinations.addFavByUserId = (userId, country) => {
  // console.log("3. hit addFavByUserId DB model:", country);
  return db("countries")
    .where({ country })
    .select("country_id")
    .then(results => {
      // console.log('countryId', country)
      db("favorite_destinations")
        .where({
          destination_id: results[0].country_id,
          user_id: userId
        })
        .then(rows => {
          if (rows.length === 0) {
            // no matching records
            console.log("no matching record");
            return db("favorite_destinations").insert({
              user_id: userId,
              destination_id: results[0].country_id
            });
          } else {
            console.log("record already exists");
          }
        })
        .catch(err => {
          console.error(err);
        });
    })
    .catch(err => console.error(err));
};

Destinations.addVisitedByUserId = (userId, country) => {
  // console.log("3. hit addVisitedByUserId DB model:", country);
  return db("countries")
    .where({ country })
    .select("country_id")
    .then(results => {
      // console.log("countryId", country);
      return db("visited_destinations")
        .where({
          destination_id: results[0].country_id,
          user_id: userId
        })
        .then(rows => {
          if (rows.length === 0) {
            // no matching records
            return db("visited_destinations").insert({
              user_id: userId,
              destination_id: results[0].country_id
            });
          } else {
            console.log("record already exists");
          }
        })
        .catch(err => {
          console.error(err);
        });
    })
    .catch(err => console.error(err));
};

Destinations.getVisitedCount = (country, cb) => {
  // `select count(*) from visited_destinations where destination_id = (select country_id from countries where country = country)`;
  return db("countries")
    .select("country_id")
    .where({ country })
    .then(results => {
      // console.log("getvisitedcount result countryid:", results[0].country_id);
      const countryId = results[0].country_id;
      return db("visited_destinations")
        .count("*")
        .where({ destination_id: countryId })
        .then(resultCount =>
          // console.log("resultCount:", resultCount[0]["count(*)"]);
          cb(resultCount[0]["count(*)"])
        )
        .catch(err => console.error(err));
    })
    .catch(err => console.log("error on getVisitedCount countries table", err));
};

module.exports = Destinations;
