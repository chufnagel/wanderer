import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import store from "./store";

// Replaced BrowserRouter with ConnectedRouter as the former does not seem to work with redux
render(
  <Provider store={store}>
    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
