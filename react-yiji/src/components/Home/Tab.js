import React, { Component } from "react";
import "./tab.css";
class Tab extends Component {
  state = {};
  render() {
    const { active, leftData, rightData, switcher, tabTitle } = this.props;
    return (
      <div className={`tabs df ${active ? "switch" : ""}`}>
        <div className="tab">
          <div className="tab-title df">
            <span className="left">{tabTitle.left}</span>
            <span onClick={switcher}>{tabTitle.right}</span>
          </div>
          <div className="content">{leftData}</div>
        </div>
        <div className="tab">
          <div className="tab-title df">
            <span onClick={switcher}>{tabTitle.left}</span>
            <span className="right">{tabTitle.right}</span>
          </div>
          <div className="content">{rightData}</div>
        </div>
      </div>
    );
  }
}

export default Tab;
