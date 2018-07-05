import { CHANGE_SELECTED_LOCATION } from "../actions/types";

function locationReducer(state = "", action) {
  switch (action.type) {
    case CHANGE_SELECTED_LOCATION:
      return action.location;
    default:
      return state;
  }
}

export default locationReducer;
