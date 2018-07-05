import { combineReducers } from 'redux';
import blogReducer from "./blogReducer";
import photoReducer from "./photoReducer.js"
import navReducer from "./navReducer.js"
import destinationsReducer from "./destinationsReducer.js"
// use map, filter, Object.assign() and array destructuring to
// return new version of state!
// No mutations!

const rootReducer = combineReducers({
  blogs: blogReducer,
  photos: photoReducer,
  navFlag: navReducer,
  destinationsFuture: destinationsReducer, 
  destinationsPast: destinationsReducer, 
  //Below are placeholders and need to be updated. A reducer needs to be defined for each item in the store or else it will throw an error
  currentText: (state = {}) => state,
  countries: (state = {}) => state,
  location: (state = {}) => state,
  photos: (state = {}) => state,
  pointsOfInterest: (state = {}) => state
});

export default rootReducer;
