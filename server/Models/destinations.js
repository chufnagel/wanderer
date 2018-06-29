const db = require("../db");

const Destinations = {};

Destinations.retrieveFavByUserId = userId => {
  console.log('userId',userId)  
  return db("favorite_destinations")
    .where({ user_id: userId })
    .then((destination_id) => {
        var arr = destination_id.map( function(el) { return el.destination_id; });
        console.log('arr',arr)
        db("countries").whereIn('country_id', arr)

        //db.query( "select * from `countries` where `country_id` IN "+ arr)
        .then((country) => {
            console.log('country',country)
            return country; 
        })
    })
    .catch(err => console.error(err));
};

module.exports = Destinations;