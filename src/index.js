import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import store from "./store";
import {ConnectedRouter} from 'react-router-redux'

render(
  <Provider store={store}>
    <ConnectedRouter>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
