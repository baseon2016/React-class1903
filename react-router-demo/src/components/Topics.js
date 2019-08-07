import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import Topic from "./Topic";
class Topics extends Component {
  // 子路由的地址必须由父路由地址开头
  // 如何在react组件内获取路由地址相关信息
  //当一个组件被当做路由组件 (该组件用Route组件包裹),该组件会默认接收一些Props
  // props内
  // 1.history
  // 2.location
  // 3.match  match 下的url给link to用  path给 Route path用
  // 而当一个组件不是路由组件,你需要使用路由的属性props，可以使用路由的 {WithRouter}
  render() {
    const { match } = this.props;
    return (
      <div className="topics">
        <ul>
          <li>
            <NavLink activeStyle={{ color: "red" }} to={`${match.url}/hot`}>
              热门
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: "red" }} to={`${match.url}/new`}>
              最新
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: "red" }} to={`${match.url}/hottest`}>
              热榜
            </NavLink>
          </li>
        </ul>
        {/* 设置动态路由 */}
        <Route
          path={`${match.path}`}
          exact
          render={() => <div>请选择topic</div>}
        />
        <Route path={`${match.path}/:id`} component={Topic} />
      </div>
    );
  }
}

export default Topics;
