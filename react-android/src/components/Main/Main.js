import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "../Home/Home";
import ProjectIndex from "../ProjectIndex/ProjectIndex";
import Tree from "../Tree/Tree";
import "./main.css";
class Main extends Component {
  state = {};
  render() {
    return (
      <div className="main">
        <div className="e-container mt30 df">
          <div className="main-content">
            <Route path="/" component={Home} exact />
            <Route path="/index" component={Home} />
            <Route path="/projectindex" component={ProjectIndex} />
            <Route path="/tree" component={Tree} />
          </div>
          <div className="fixed-content" />
        </div>
      </div>
    );
  }
}

export default Main;
