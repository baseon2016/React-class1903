import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <div>
        <h1 onClick={() => this.props.history.push("/")}>首页</h1>
        <p onClick={this.props.history.goBack}>返回</p>
      </div>
    );
  }
}

export default withRouter(Header);
