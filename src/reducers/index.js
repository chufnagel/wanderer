import { combineReducers } from 'redux';
import BlogReducer from "./blogReducer";

// use map, filter, Object.assign() and array destructuring to
// return new version of state!
// No mutations!

const rootReducer = combineReducers({
  blogs: BlogReducer
});

export default rootReducer;
