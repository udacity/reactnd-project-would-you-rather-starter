import React from "react";
import { Provider } from "react-redux";

// Routes
import Routes from "./Routes";
// ./Routes

export default function App({ store }) {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
