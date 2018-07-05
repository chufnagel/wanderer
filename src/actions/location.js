import { CHANGE_SELECTED_LOCATION } from "./types";

function changeSelectedLocation(location) {
  return {
    type: CHANGE_SELECTED_LOCATION,
    location
  };
}

export default changeSelectedLocation;
