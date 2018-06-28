const axios = require("axios");
const { GOOGLEPLACES_API_KEY } = require("../config.js");

// const GOOGLEPLACES_API_KEY = process.env.GOOGLEPLACES_API_KEY;

module.exports = {
  // query Google API for points of interest for a particular country
  getPointsOfInterest: (countryOrCity, cb) => {
    const countryWords = countryOrCity.split(" ");
    if (countryWords.length > 1) {
      countryWords.forEach((word, index) => {
        if (word === "&") {
          countryWords[index] = "and";
        }
      });
      countryOrCity = countryWords.join("+");
      console.log("querying this countryOrCity:", countryOrCity);
    }
    let queryStr = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${countryOrCity}+points+of+interest&language=en&key=${GOOGLEPLACES_API_KEY}`;
    axios.get(queryStr).then(data => cb(null, data.data.results));
  }
};
