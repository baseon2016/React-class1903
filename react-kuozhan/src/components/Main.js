import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
class Main extends Component {
  state = {};
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
      </div>
    );
  }
}

export default Main;
