import { ADD_BLOG, GET_BLOGS } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case ADD_BLOG:
      return [action.payload, ...state];

    case GET_BLOGS:
      return action.payload;

    default:
      return state;
  }
}
