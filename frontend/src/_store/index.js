import { createStore, combineReducers, applyMiddleware } from "redux";
import master from "../_reducers/master";

import { logger, promise } from "./middleware";

const middleware = [logger, promise];

// GLOBAL STATES
const rootReducer = combineReducers({
  master,
});

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
