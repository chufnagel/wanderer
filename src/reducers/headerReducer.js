import SET_HEADER from "../actions/types";

export default function header(state = {}, action) {
  switch (action.type) {
    case SET_HEADER:
      return Object.assign({}, state, {
        headerSetting: action.setting
      });
    default:
      return state;
  }
}
