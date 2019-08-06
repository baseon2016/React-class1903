// 存放路由的组件
import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Users from "./Users";
// 路由必须包裹在 react-router-dom 中的一个组件下(BrowserRouter:仿浏览器历史记录 或 HashRouter:通过锚点跳转)
// 只有Router包裹的的组件才能使用路由相关东西
//一个项目只能有一个Router
const Routers = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/users" component={Users} />
    </div>
  );
};

export default Routers;
