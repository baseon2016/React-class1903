import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import User from "./User";
class Users extends Component {
  // 子路由的地址必须由父路由地址开头
  // 如何在react组件内获取路由地址相关信息
  //当一个组件被当做路由组件 (该组件用Route组件包裹),该组件会默认接收一些Props
  // props内
  // 1.history
  // 2.location
  // 3.match  match 下的url给link to用  path给 Route path用
  render() {
    const { match } = this.props;
    return (
      <div className="users">
        <ul>
          <li>
            <NavLink
              activeStyle={{ color: "red" }}
              to={`${match.url}/zhangsan`}
            >
              张三
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: "red" }} to={`${match.url}/lisi`}>
              李四
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: "red" }} to={`${match.url}/wangwu`}>
              王五
            </NavLink>
          </li>
        </ul>
        {/* 设置动态路由 */}
        <Route path={`${match.path}/:id`} component={User} />
      </div>
    );
  }
}

export default Users;
