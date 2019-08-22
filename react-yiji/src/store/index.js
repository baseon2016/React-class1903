import { createStore, applyMiddleware, combineReducers } from "redux";
import { logger } from "redux-logger";

const rootReducer = combineReducers({});
const store = createStore(rootReducer, applyMiddleware(logger));
export default store;
