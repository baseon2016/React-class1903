import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomeBottom from "./HomeBottom";
import Articles from "./articles/Articles";
import Recommend from "./recommend/Recommend";
import Post from "./post/Post";
import User from "./user/User";
class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Switch>
          <Route path="/home/articles" exact component={Articles} />
          <Route path="/home/recommend" component={Recommend} />
          <Route path="/home/post" component={Post} />
          <Route path="/home/user" component={User} />
        </Switch>
        <HomeBottom />
      </div>
    );
  }
}

export default Home;
