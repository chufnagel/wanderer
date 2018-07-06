import { SET_HEADER } from "../actions/types";

export default function headerSetting(state = "", action) {
  switch (action.type) {
    case SET_HEADER:
      return action.setting === state.header
        ? { headerSetting: action.setting }
        : state;
    default:
      return state;
  }
}
