import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "core-js/stable";
import "regenerator-runtime/runtime";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
