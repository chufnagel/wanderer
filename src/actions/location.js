import * as actions from "./types";

function changeSelectedLocation(location) {
  return {
    type: actions.CHANGE_SELECTED_LOCATION,
    location
  };
}

export default changeSelectedLocation;
