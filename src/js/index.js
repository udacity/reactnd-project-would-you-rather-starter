import React from "react";
import ReactDOM from "react-dom";

// Plugins
import "../scss/index.scss";
// ./Plugins

// Components
import App from "./App";
// ./Components

// Settings
import store from "./store";
// ./Settings

ReactDOM.render(<App store={store} />, document.getElementById("app"));
