// 在redux包内导出一个方法 createStore 用来创建store
import { createStore } from "redux";
// createStore方法需要接受一个函数作为参数,该函数叫做reducer函数
// reducer函数会默认接收一个state作为参数,给该参数赋的值就是原始state,并且把该参数返回(return)
//这样createStore方法执行的时候就会创建一个store,reducer函数内的state参数就是共享的state,也就是store中的数据
const initialState = {
  count: 10
};
// action相当于之前vue的mutation
// action 类型需要写成大写
//如何修改store中的数据
// 通过store下的dispatch方法发action
//store.dispatch({type:'ADD',payload:'载荷数据(更新state要用的)'})
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      console.log("ADD 触发");
      state.count++;
      break;
    case "DEL":
      console.log("DEL 触发");
      state.count--;
      break;
    default:
      break;
  }
  return state;
};
const store = createStore(rootReducer);
export default store;
// export default createStore((state={count:0})=>state)
