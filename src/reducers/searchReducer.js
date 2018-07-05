import {
  GET_ATTRACTIONS_SUCCESS,
  GET_POINTS_OF_INTEREST_SUCCESS
} from "../actions/types";

function attractions(state = [], action) {
  switch (action.type) {
    case GET_ATTRACTIONS_SUCCESS:
      return [...state, { attractions: action.attractions }];
    default:
      return state;
  }
}

function pointsOfInterest(state = [], action) {
  switch (action.type) {
    case GET_POINTS_OF_INTEREST_SUCCESS:
      return [...state, { pointsOfInterest: action.pointsOfInterest }];
    default:
      return state;
  }
}

export { attractions, pointsOfInterest as default };
