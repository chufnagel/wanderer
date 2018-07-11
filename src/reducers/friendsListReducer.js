import * as actions from "../actions/types";

export default function friends(state = [], action) {
  switch (action.type) {
    case actions.GET_FRIENDS_LIST_SUCCESS:
      return action.friends;
    case actions.GET_FRIENDS_LIST_FAILURE:
      return state;
    default:
      return state;
  }
}
