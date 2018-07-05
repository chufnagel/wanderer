import { CHANGE_SELECTED_LOCATION } from "../actions/types";

function location(state = "", action) {
  switch (action.type) {
    case CHANGE_SELECTED_LOCATION:
      return action.location;
    default:
      return state;
  }
}

export default location;
