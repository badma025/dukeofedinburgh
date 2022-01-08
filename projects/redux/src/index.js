import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import userReducer from "./features/user";
import themeReducer from "./features/theme";

// allows you to configure your store
const store = configureStore({
  // a reducer is a function that takes information about the current state and takes an action that you want to perform on the state and returns a value
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
});

ReactDOM.render(
  <React.StrictMode>
    {/* the provider holds all the states you want to make global */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
