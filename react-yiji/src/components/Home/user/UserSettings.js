import React, { Component } from "react";
import "./settings.css";
class UserSettings extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div className="settings" onClick={this.props.history.goBack}>
        <img
          src="https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/settings.png"
          alt=""
        />
      </div>
    );
  }
}

export default UserSettings;
