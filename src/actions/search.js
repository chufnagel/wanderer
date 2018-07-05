import { GET_POINTS_OF_INTEREST, GET_ATTRACTIONS } from "./types";

export function getPointsOfInterestAsync(pointsOfInterest) {
  return {
    type: GET_POINTS_OF_INTEREST,
    pointsOfInterest
  };
}

export function getPointsOfInterest(term) {
  return dispatch => {
    axios.post("/getPointsOfInterest", { location: term }).then(({ data }) => {
      const pointsOfInterest = data.map(attraction => {
        return attraction;
      });
      dispatch(getPointsOfInterestAsync(pointsOfInterest));
    });
  };
}

export function getAttractionsAsync(attractions) {
  return {
    type: GET_ATTRACTIONS,
    attractions
  };
}

export function getAttractions(term) {
  return dispatch => {
    axios.post("/getAttractions", { location: term }).then(({ data }) => {
      const attractions = data.map(attraction => {
        return attraction;
      });
      dispatch(getAttractionsAsync(attractions));
    });
  };
}
