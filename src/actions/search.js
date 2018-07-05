import { GET_POINTS_OF_INTEREST_SUCCESS, GET_ATTRACTIONS_SUCCESS } from "./types";

function getPointsOfInterestSuccess(pointsOfInterest) {
  return {
    type: GET_POINTS_OF_INTEREST_SUCCESS,
    pointsOfInterest
  };
}

function getPointsOfInterest(term) {
  return dispatch => {
    axios.post("/getPointsOfInterest", { location: term }).then(({ data }) => {
      const pointsOfInterest = data.map(attraction => {
        return attraction;
      });
      dispatch(getPointsOfInterestSuccess(pointsOfInterest));
    });
  };
}

function getAttractionsSuccess(attractions) {
  return {
    type: GET_ATTRACTIONS_SUCCESS,
    attractions
  };
}

function getAttractions(term) {
  return dispatch => {
    axios.post("/getAttractions", { location: term }).then(({ data }) => {
      const attractions = data.map(attraction => {
        return attraction;
      });
      dispatch(getAttractionsSuccess(attractions));
    });
  };
}

export {
  getPointsOfInterestSuccess,
  getPointsOfInterest,
  getAttractionsSuccess,
  getAttractions
}
