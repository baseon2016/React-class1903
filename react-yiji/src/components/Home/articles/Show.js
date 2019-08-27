import React, { Component } from "react";
import "./show.css";
import Tab from "../Tab";
class Show extends Component {
  state = {};
  render() {
    const { showActive, onShowRe, toShowRe, switchShow } = this.props;
    return (
      <div className="show">
        <Tab active={showActive} leftData={onShowRe} rightData={toShowRe} switcher={switchShow} tabTitle={{left:'正在展出',right:'即将展出'}}></Tab>
      </div>
    );
  }
}

export default Show;
