import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "./Home";
import About from "./About";
import "./main.css";
class Main extends Component {
  state = {};
  render() {
    const { location } = this.props;
    return (
      //CSSTransition放在TransitionGroup触发动画的时候不能使用in 需要使用key属性
      <TransitionGroup>
        <CSSTransition
          timeout={1000}
          classNames="mainfade"
          key={location.pathname}
        >
          {/* 路径变化前的Route 触发exit属性 变化后的Route 触发enter属性 */}
          <Switch location={location}>
            <Route path="/" exact component={Home}></Route>
            <Route path="/about" component={About}></Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default withRouter(Main);
