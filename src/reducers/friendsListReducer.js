import {
  GET_FRIENDS_LIST_SUCCESS,
  GET_FRIENDS_LIST_REQUEST,
  GET_FRIENDS_LIST_FAILURE
} from "../actions/types";
import { updateObject } from "../utility";

const initialState = {
  friends: [],
  loading: false
};

export default function friends(state = initialState, action) {
  switch (action.type) {
    case GET_FRIENDS_LIST_REQUEST:
      return updateObject(state, { loading: true });
    case GET_FRIENDS_LIST_SUCCESS:
      return updateObject(state, {
        friends: action.friends,
        loading: false
      });
    case GET_FRIENDS_LIST_FAILURE:
      return updateObject(state, { loading: false });
    default:
      return state;
  }
}
