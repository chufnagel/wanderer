import * as actions from "../actions/types";

export default function headerSetting(state = "HOME", action) {
  switch (action.type) {
    case actions.SET_HEADER:
      return action.setting !== state.headerSetting ? action.setting : state;
    default:
      return state;
  }
}
