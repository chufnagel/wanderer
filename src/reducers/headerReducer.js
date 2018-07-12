import { SET_HEADER } from "../actions/types";
import { OTHER } from "../constants";

export default function headerSetting(state = OTHER, action) {
  switch (action.type) {
    case SET_HEADER:
      return action.setting !== state.headerSetting ? action.setting : state;
    default:
      return state;
  }
}
