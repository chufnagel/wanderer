import { combineReducers } from 'redux';
import blogReducer from "./blogReducer";

// use map, filter, Object.assign() and array destructuring to
// return new version of state!
// No mutations!

const rootReducer = combineReducers({
  blogs: blogReducer
  // photos: photoReducer,
  // attractions: attractionsReducer,
  // pointsOfInterest: pointsOfInterestReducer,
  // destinations: destinationsReducer
});

export default rootReducer;
