import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
const initialState = {
  posts: [
    {
      id: "31223",
      title: "3213123as",
      content: "内容安徽的哈市两款发动机"
    },
    {
      id: "31223432",
      title: "3213123asjsdjgpdsj",
      content: "gfsjflsjf副书记福利卡时间段"
    }
  ],
  comments: [
    {
      id: "hkjsldhf",
      postId: "31223",
      text: "评论1"
    },
    {
      id: "4ty6fj4hft64j",
      postId: "31223432",
      text: "评论2"
    }
  ]
};
const rootReducer = (state = initialState, action) => {
  return state;
};
const store = createStore(rootReducer, applyMiddleware(logger));
export default store;
