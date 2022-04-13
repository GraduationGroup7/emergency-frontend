import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA

// learned how to do the PWA thing from https://www.codica.com/blog/how-to-create-pwa-with-react/#step-1-set-up-a-simple-react-app

serviceWorkerRegistration.register();
