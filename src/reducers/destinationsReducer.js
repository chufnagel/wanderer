import { ADD_BLOG, GET_BLOGS } from "../actions/types";
import { updateObject } from "../utility";

export function reducerPast(state = [], action) {
  switch (action.type) {
    case "GET_DESTINATIONS_PAST":
      return action.destinationsPast;
    default:
      return state;
  }
}

export function reducerFuture(state = [], action) {
  switch (action.type) {
    case "GET_DESTINATIONS_FUTURE":
      return action.destinationsFuture;
    default:
      return state;
  }
}
