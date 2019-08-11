import React, { Component } from "react";

import { Link, NavLink, withRouter } from "react-router-dom";
import "./header.css";
class Header extends Component {
  render() {
    const { pathname } = this.props.location;
    return (
      <div className="header">
        <div>
          <Link to="/" className="logo">
            <img
              src="https://www.wanandroid.com/resources/image/pc/logo.png"
              alt=""
            />
          </Link>
          <ul className="nav df">
            <li>
              <NavLink
                to="/index"
                activeClassName="active"
                className={pathname === "/" ? "active" : ""}
              >
                <span className="text">
                  首页
                  <span className="line" />
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/projectindex" activeClassName="active">
                <span className="text">
                  项目
                  <span className="line" />
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/tree" activeClassName="active">
                <span className="text">
                  体系
                  <span className="line" />
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/b" activeClassName="active">
                <span className="text">
                  公众号
                  <span className="line" />
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/c" activeClassName="active">
                <span className="text">
                  导航
                  <span className="line" />
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/d" activeClassName="active">
                <span className="text">
                  项目分类
                  <span className="line" />
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/e" activeClassName="active">
                <span className="text">
                  工具
                  <span className="line" />
                </span>
              </NavLink>
            </li>
          </ul>
          <div className="login" />
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
