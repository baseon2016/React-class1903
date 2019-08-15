import { createStore, applyMiddleware, combineReducers } from "redux";
import { logger } from "redux-logger";
import posts from "./reducers/posts";
import comments from "./reducers/comments";
import thunk from "redux-thunk";
// 该中间件的功能适用于创建异步action 创建函数,有一个相对高级的插件redux-saga
const rootReducer = combineReducers({
  posts,
  comments
});
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
export default store;
