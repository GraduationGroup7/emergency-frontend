import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA

// learned how to do the PWA thing from https://www.codica.com/blog/how-to-create-pwa-with-react/#step-1-set-up-a-simple-react-app

// remember that pwa only works in built mode i.e. you have to build the app to see it working
serviceWorkerRegistration.register();
