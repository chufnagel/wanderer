const axios = require("axios");

module.exports = {
  // query Google API for points of interest for a particular location
  getPointsOfInterest: (location, cb) => {
    const locationWords = location.split(" ");
    if (locationWords.length > 1) {
      locationWords.forEach((word, index) => {
        if (word === "&") {
          locationWords[index] = "and";
        }
      });
      location = locationWords.join("+");
    }
    const queryStr = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${location}+points+of+interest&language=en&key=${
      process.env.GOOGLEPLACES_API_KEY
    }`;
    axios.get(queryStr).then(data => cb(null, data.data.results));
  },
  // query Atlas Obscura for attractions for a given country
  getAttractions: (location, cb) => {
    const locationWords = location.split(" ");
    if (locationWords.length > 1) {
      locationWords.forEach((word, index) => {
        if (word === "&") {
          locationWords[index] = "and";
        }
      });
      location = locationWords.join("-");
    }
    const queryStr = `https://atlas-obscura-api.herokuapp.com/api/atlas/attractions/${location}`;
    axios
      .get(queryStr)
      .then(result => cb(result.data.Attractions))
      .catch(err =>
        console.log("helper function error getting attractions:", err)
      );
  },
  // query REST Countries API for basic country info for a given country
  getLocationBasicInfo: (location, cb) => {
    const queryStr = `https://restcountries.eu/rest/v2/name/${location}`;
    axios
      .get(queryStr)
      .then(result => cb(result.data[0]))
      .catch(err =>
        console.log("helper function error getting basic info:", err)
      );
  }
};
