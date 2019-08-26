import React, { Component } from "react";
import "./show.css";
class Show extends Component {
  state = {};
  render() {
    const { showActive, onShowRe, toShowRe, switchShow } = this.props;
    return (
      <div className="show">
        <div className={`show-tabs df ${showActive ? "toshow" : ""}`}>
          <div className="show-tab">
            <div className="tab-title df">
              <span className="onshow active">正在展出</span>
              <span onClick={switchShow}>即将展出</span>
            </div>
            <div className="show-content">{onShowRe}</div>
          </div>
          <div className="show-tab">
            <div className="tab-title df">
              <span onClick={switchShow}>正在展出</span>
              <span className="toshow active">即将展出</span>
            </div>
            <div className="show-content">{toShowRe}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
