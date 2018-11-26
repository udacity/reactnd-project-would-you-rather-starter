import { createStore } from "redux";
import middleware from "./middleware";
import reducers from "./reducers";

const store = createStore(reducers, middleware);

export default store;