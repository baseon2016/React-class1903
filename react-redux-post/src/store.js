import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
const initialState = {
  posts: [],
  comments: [
    // {
    //   id: "hkjsldhf",
    //   postId: "31223",
    //   text: "评论1"
    // },
    // {
    //   id: "4ty6fj4hft64j",
    //   postId: "31223432",
    //   text: "评论2"
    // }
  ]
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

    default:
      return state;
  }
};
const store = createStore(rootReducer, applyMiddleware(logger));
export default store;
