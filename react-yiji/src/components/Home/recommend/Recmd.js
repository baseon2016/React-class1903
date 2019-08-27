import React, { Component } from "react";
import Tab from "../Tab";
import "./recmd.css";
class Post extends Component {
  state = {};
  render() {
    const { recmdActive, recmdLRe, recmdRRe, switchRecmd } = this.props;
    return (
      <div className="recmd">
        <Tab
          active={recmdActive}
          leftData={recmdLRe}
          rightData={recmdRRe}
          switcher={switchRecmd}
          tabTitle={{ left: "展", right: "文" }}
        ></Tab>
      </div>
    );
  }
}

export default Post;
