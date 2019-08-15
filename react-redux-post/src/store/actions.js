import {
  GET_POSTS,
  GET_COMMENTS,
  ADD_COMMENT,
  DEL_COMMENT
} from "./actionTypes";
import axios from "axios";
// 创建一个异步的action,必须搭配redux-thunk或redux-saga使用
//普通的action函数需要返回一个对象{type:xxx,xxx}
// 异步的action创建函数需要返回一个函数,该返回函数需要一个参数dispatch,在该返回的函数内部可以直接发送异步请求,请求成功之后使用该dispatch发出action

const getPosts = () => {
  // 这个getPosts函数由于会被mapDispatchToProps 方法包装,包装之后内部就可以获取到dispatch函数了,当执行被包装的action创建函数时会把dispatch当做参数传递给被包装action创建函数的返回值的参数

  return dispatch => {
    const url = "http://localhost:5000/posts";
    axios.get(url).then(res => {
      dispatch({ type: GET_POSTS, payload: res.data });
    });
  };
};
const getComments = id => {
  return dispatch => {
    const url = `http://localhost:5000/comments?postId=${id}`;
    axios.get(url).then(res => {
      dispatch({ type: GET_COMMENTS, payload: res.data });
    });
  };
};
const addComment = payload => {
  return dispatch => {
    const url = "http://localhost:5000/comments";
    axios
      .post(url, {
        text: payload.val,
        postId: payload.postId
      })
      .then(res => {
        dispatch({ type: ADD_COMMENT, payload: res.data });
      });
  };
};
const delComment = id => {
  return dispatch => {
    const url = `http://localhost:5000/comments/${id}`;
    axios.delete(url).then(res => {
      dispatch({ type: DEL_COMMENT, payload: id });
    });
  };
};
export { getPosts, getComments, addComment, delComment };
