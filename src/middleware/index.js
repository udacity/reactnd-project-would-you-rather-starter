import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

export default applyMiddleware(createLogger(), thunk);
