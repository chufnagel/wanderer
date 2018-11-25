import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { HashRouter, BrowserRouter, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import App from "./components/App";
import store from "./store";

const theme = createMuiTheme({
  palette: {
    common: {
      type: "dark",
    },
    primary: {
      main: "#9575cd",
      light: "#c7a4ff",
      dark: "#65499c",
      contrastText: "#fff",
    },
    secondary: {
      main: "#80deea",
      light: "#88ffff",
      dark: "#26c6da",
      contrastText: "#000",
    },
    text: {
      primary: "rgba(255, 255, 255, 0.87)",
      secondaryTextColor: "#9575cd",
    },
    background: {
      paper: "#76688C",
    },
  },
  card: {
    titleColor: "#b39ddb",
    subtitleColor: "rgba(255, 255, 255, 0.87)",
  },
  typography: {
    useNextVariants: true,
    suppressDeprecationWarnings: true,
    fontFamily: "Roboto, sans-serif",
    h4: {
      color: "#fff",
    },
  },
  button: {
    color: "#547E84",
  },
  zIndex: {
    drawer: 1200,
    modal: 1300,
    tooltip: 1500,
  },
});

/* global document, window, navigator */

if (process.env.NODE_ENV === "production") {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/sw.js")
        .then(registration => {
          console.log("SW registered: ", registration);
        })
        .catch(registrationError => {
          console.log("SW registration failed: ", registrationError);
        });
    });
  }
}

render(
  <Provider store={store}>
    <HashRouter>
      <MuiThemeProvider theme={theme}>
        <Route component={App} />
      </MuiThemeProvider>
    </HashRouter>
  </Provider>,
  document.getElementById("root"),
);

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
