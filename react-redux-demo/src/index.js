import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
//react 和 redux 关联 react 获取redux中的store的数据类似当做自己的state,store 数据变化react组件内的也更新
//需要从react-redux包中拿Provider组件,该组件的作用是获取 redux 中的数据提供给react中的所有组件
// 我们将该组件包裹在App组件外,意思是提供给App组件store,也就意味着所有组件都可以获取store内的数据
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
