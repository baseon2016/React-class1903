import React, { Component } from "react";
import { Route, NavLink, withRouter } from "react-router-dom";
import Blogs from "./Blogs";
import Projects from "./Projects";
import "./home-articles.css";
class HomeArticles extends Component {
  state = {};
  render() {
    const { pathname } = this.props.location;
    console.log(this.props);
    return (
      <div className="articles-wrap">
        <div className="articles-title df">
          <NavLink
            to="/index"
            activeClassName="active"
            className={pathname === "/" ? "active" : ""}
          >
            最新博文
          </NavLink>
          <span className="splite">|</span>
          <NavLink to="/pindex" activeClassName="active">
            最新项目
          </NavLink>
        </div>
        <div>
          <Route path="/" component={Blogs} exact />
          <Route path="/index" component={Blogs} />
          <Route path="/pindex" component={Projects} />
        </div>
      </div>
    );
  }
}

export default withRouter(HomeArticles);
