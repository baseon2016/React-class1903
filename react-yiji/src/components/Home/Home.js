import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import HomeBottom from "./HomeBottom";
import Articles from "./articles/Articles";
import Recommend from "./recommend/Recommend";
import Post from "./post/Post";
import { getTab } from "../../store/actions";
import UserContainer from "./user/UserContainer";
class Home extends Component {
  state = {};
  componentDidMount() {
    const { pathname } = this.props.location;
    const tab = pathname.replace("/home/", "");
    this.props.getTab(tab);
  }
  render() {
    return (
      <div>
        <Switch>
          <Route path="/home" exact component={Articles} />
          <Route path="/home/articles" component={Articles} />
          <Route path="/home/recommend" component={Recommend} />
          <Route path="/home/post" component={Post} />
          <Route path="/home/user" component={UserContainer} />
        </Switch>
        <HomeBottom />
      </div>
    );
  }
}

export default connect(
  null,
  { getTab }
)(Home);
