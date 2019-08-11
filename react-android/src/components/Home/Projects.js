import React, { Component } from "react";
class Projects extends Component {
  state = {};
  render() {
    return (
      <div className="projects">
        <div className="collect" />
        <div className="project">
          <span>标题</span>
          <p>简介</p>
          <div>
            <span>时间</span>
            <span>作者</span>
            <span>同类项目</span>
          </div>
        </div>
        <div className="project-pic" />
      </div>
    );
  }
}

export default Projects;
