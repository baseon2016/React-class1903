import { createStore, applyMiddleware, combineReducers } from "redux";
import { logger } from "redux-logger";
import guide from "./reducers/guide";
import login from "./reducers/login";
const rootReducer = combineReducers({
  guide,
  login
});
const store = createStore(rootReducer, applyMiddleware(logger));
export default store;
