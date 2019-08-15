import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
const initialState = {
  posts: [],
  comments: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GETPOSTS":
      return {
        ...state,
        posts: action.payload
      };
    case "GETCOMMENTS":
      return {
        ...state,
        comments: action.payload
      };
    case "ADDCOMMENT":
      return {
        ...state,
        comments: [...state.comments, action.payload]
      };
    case "DELCOMMENT":
      return {
        ...state,
        comments: action.payload
      };
    default:
      return state;
  }
};
const store = createStore(rootReducer, applyMiddleware(logger));
export default store;
