import { combineReducers } from 'redux';
import blogReducer from "./blogReducer";
import photoReducer from "./photoReducer.js"

// use map, filter, Object.assign() and array destructuring to
// return new version of state!
// No mutations!

const rootReducer = combineReducers({
  blogs: blogReducer,
  photos: photoReducer,

  //Below are placeholders and need to be updated
  currentText: (state = {}) => state,
  countries: (state = {}) => state,
  location: (state = {}) => state,
  navFlag: (state = {}) => state,
  photos: (state = {}) => state,
  pointsOfInterest: (state = {}) => state,
  userId: (state = {}) => state,
  destinations: (state = {}) => state,
});

export default rootReducer;
