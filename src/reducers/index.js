import { combineReducers } from 'redux';

import { ADD_BLOG, GET_BLOGS } from "../actions/types";

// use map, filter, Object.assign() and array destructuring to
// return new version of state!
// No mutations!

export default function(state=[], action) {
  switch (action.type) {
    case ADD_BLOG:
      return [action.payload, ...state];

    case GET_BLOGS:
      return action.payload;

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  //
});

export default rootReducer;
