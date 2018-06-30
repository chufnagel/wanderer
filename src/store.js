// import { applyMiddleware, createStore } from "redux";
// import thunk from "redux-thunk";
// import logger from "redux-logger";
// import { composeWithDevTools } from "redux-devtools-extension";

// import { rootReducer } from "./reducers/index";

// const configureStore = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk, logger))
// );

// export default configureStore;


import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  rootReducer,
  {
    currentText: 'Intializing...',
    currentArticle: 'Hack Reactor',
    articleList: [],
    clickCounter: 0
  },
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;
