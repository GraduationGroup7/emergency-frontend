import React from "react";
import ReactDOM from "react-dom";
// import "./styles.css";
import "./css/main.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";

let persistor = persistStore(store);

ReactDOM.render(
  <BrowserRouter basename="/emergency-frontend">
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA

// learned how to do the PWA thing from https://www.codica.com/blog/how-to-create-pwa-with-react/#step-1-set-up-a-simple-react-app

// remember that pwa only works in built mode i.e. you have to build the app to see it working
serviceWorkerRegistration.register();
