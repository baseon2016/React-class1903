import React, { Component } from "react";
import "./home-top.css";
class HomeTop extends Component {
  state = {};
  render() {
    return (
      <div className="home-top po-r df">
        <h1>
          <img
            src="https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/logo.png"
            alt=""
          />
        </h1>
        <div className="scope po-a">
          <img
            src="https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/scope.png"
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default HomeTop;
