// 存放路由的组件
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Topics from "./Topics";
import Err from "./Err";
// 路由必须包裹在 react-router-dom 中的一个组件下(BrowserRouter:仿浏览器历史记录 或 HashRouter:通过锚点跳转)
// 只有Router包裹的的组件才能使用路由相关东西
//一个项目只能有一个Router
const Routers = () => {
  // 路由Path的匹配规则就是包含匹配
  // Switch下的Route只能选择一个匹配,前面的匹配后面的就不匹配
  // Redirect 路由重定向,必须用Switch套一下
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Redirect from="/about" to="/newabout" />
      <Route path="/newabout" component={About} />
      <Route path="/topics" component={Topics} />
      <Route path="*" component={Err} />
    </Switch>
  );
};

export default Routers;
