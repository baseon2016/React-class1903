import React, { Component } from "react";
import "./tohere.css";
class Tohere extends Component {
  state = {};
  render() {
    return (
      <div className="tohere">
        <img
          onClick={this.props.history.goBack}
          src="https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/tohere.jpg"
          alt=""
        />
      </div>
    );
  }
}

export default Tohere;
