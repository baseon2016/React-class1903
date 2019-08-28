import { createStore, applyMiddleware, combineReducers } from "redux";
import { logger } from "redux-logger";
import guide from "./reducers/guide";
import login from "./reducers/login";
import home from "./reducers/home";
import show from "./reducers/show";
import recommend from "./reducers/recommend";
import user from "./reducers/user";
import userinfo from "./reducers/userinfo";
const rootReducer = combineReducers({
  guide,
  login,
  home,
  show,
  recommend,
  user,
  userinfo
});
const store = createStore(rootReducer, applyMiddleware(logger));
export default store;
