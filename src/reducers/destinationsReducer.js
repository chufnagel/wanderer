import { ADD_BLOG, GET_BLOGS } from "../actions/types";
import { updateObject } from "../utility";

export default function(state = [], action) {
  switch (action.type) {
    case "GET_DESTINATIONS_PAST":
      return action.destinationsPast;

    case "GET_DESTINATIONS_FUTURE":
      return action.destinationsFuture;  

    default:
      return state;
  }
}
