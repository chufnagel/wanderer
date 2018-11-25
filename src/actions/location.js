import * as actions from "./types";

export function changeSelectedLocation(location) {
  return {
    type: actions.CHANGE_SELECTED_LOCATION,
    location,
  };
}
