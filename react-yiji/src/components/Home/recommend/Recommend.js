import React, { Component } from "react";
import HomeTop from "../HomeTop";
import RecmdContainer from "./RecmdContainer";
class Recommend extends Component {
  state = {};
  render() {
    return (
      <div>
        <HomeTop></HomeTop>
        <RecmdContainer></RecmdContainer>
      </div>
    );
  }
}

export default Recommend;
