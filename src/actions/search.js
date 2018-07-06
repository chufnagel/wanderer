import axios from "axios";
import * as actions from "./types";

function getPointsOfInterestSuccess(pointsOfInterest) {
  return {
    type: actions.GET_POINTS_OF_INTEREST_SUCCESS,
    pointsOfInterest
  };
}

export function getPointsOfInterest(term) {
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
    type: actions.GET_ATTRACTIONS_SUCCESS,
    attractions
  };
}

export function getAttractions(term) {
  return dispatch => {
    axios.post("/getAttractions", { location: term }).then(({ data }) => {
      const attractions = data.map(attraction => {
        return attraction;
      });
      dispatch(getAttractionsSuccess(attractions));
    });
  };
}
