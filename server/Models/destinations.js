const db = require("../db");

const Destinations = {};

Destinations.retrieveFavByUserId = (userId, cb) => {
  console.log('userId',userId)  
  return db("favorite_destinations")
    .where({ user_id: userId })
    .then((destination_id) => {
        var arr = destination_id.map( function(el) { return el.destination_id; });
        db("countries").whereIn('country_id', arr)
        //db.query( "select * from `countries` where `country_id` IN "+ arr)
        .then((countries) => {
            console.log('country',countries)
            cb(countries); 
        })
        .catch(err => console.error(err));    
    })
    .catch(err => console.error(err));
};

Destinations.retrieveVisitedByUserId = (userId, cb) => {
    console.log('userId',userId)  
    return db("visited_destinations")
      .where({ user_id: userId })
      .then((destination_id) => {
          var arr = destination_id.map( function(el) { return el.destination_id; });
          db("countries").whereIn('country_id', arr)
          //db.query( "select * from `countries` where `country_id` IN "+ arr)
          .then((countries) => {
              console.log('country',countries)
              cb(countries); 
          })
          .catch(err => console.error(err));    
      })
      .catch(err => console.error(err));
  };

module.exports = Destinations;