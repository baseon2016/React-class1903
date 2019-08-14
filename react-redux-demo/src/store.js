// 在redux包内导出一个方法 createStore 用来创建store
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
// createStore方法需要接受一个函数作为参数,该函数叫做reducer函数
// reducer函数会默认接收一个state作为参数,给该参数赋的值就是原始state,并且把该参数返回(return)
//这样createStore方法执行的时候就会创建一个store,reducer函数内的state参数就是共享的state,也就是store中的数据

// redux的中间件 redux-logger 作用当你修改state中的数据时，帮你在控制台输出记录
// 如何使用 需要在redux中导出一个方法 applyMiddleware在创建store的时候，使用该方法给store添加中间件功能
const initialState = {
  count: 10,
  address: null
};
// action相当于之前vue的mutation
// action 类型需要写成大写
//如何修改store中的数据
// 通过store下的dispatch方法发action
//store.dispatch({type:'ADD',payload:'载荷数据(更新state要用的)'})
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      // 不可以对state直接修改,原因是由于redux要求不变性
      //保证不修改原来的state,返回新的state
      console.log("ADD 触发");
      return {
        ...state,
        count: state.count + 1
      };
    case "DEL":
      console.log("DEL 触发");
      return {
        ...state,
        count: state.count - 1
      };
    case "CHANGE":
      return {
        ...state,
        count: action.payload
      };
    case "GETADDRESS":
      return {
        ...state,
        address: action.payload
      };
    case "NEWADDRESS":
      return {
        ...state,
        address: action.payload
      };
    default:
      return state;
  }
};
const store = createStore(rootReducer, applyMiddleware(logger));
export default store;
// export default createStore((state={count:0})=>state)
