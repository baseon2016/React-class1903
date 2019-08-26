import React, { Component } from "react";
import "./show.css";
class Show extends Component {
  state = {};
  render() {
    return (
      <div className="show">
        <div className="show-tabs df">
          <div className="show-tab">
            <div className="tab-title df">
              <span className="onshow active">正在展出</span>
              <span>即将展出</span>
            </div>
          </div>
          <div className="show-tab">
            <div className="tab-title df">
              <span>正在展出</span>
              <span className="toshow active">即将展出</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
