import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reducer, { initialState } from "./state/reducer";
import { StateProvider } from "./state/StateProvider";

ReactDOM.render(
  <React.StrictMode>
    {/* initial state is what your data looks like in the beginning and reducer is how we change that*/}
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
