import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Post from "./Post";
class Main extends Component {
  state = {};
  render() {
    // react 中的fragments
    // 允许你导出多个节点
    // <>空标签语法糖 或者 <react.Fragments></react.Fragments>
    return (
      <>
        <Route exact path="/" component={Home} />
        <Route path="/post/:id" component={Post} />
      </>
    );
  }
}

export default Main;
