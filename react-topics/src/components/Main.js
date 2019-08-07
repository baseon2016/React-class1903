import React, { Component } from "react";
import { Route } from "react-router-dom";
import List from "./List";
import Topic from "./Topic";
import "../css/main.css";
class Main extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <Route path="/" exact component={List} />
        <Route path="/topic/:id" component={Topic} />
      </div>
    );
  }
}

export default Main;
