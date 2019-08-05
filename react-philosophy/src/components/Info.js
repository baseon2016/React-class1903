import React, { Component } from "react";
import InfoTittle from "./InfoTittle";
import InfoItem from "./InfoItem";
class Info extends Component {
  state = {};
  render() {
    return (
      <div className="info">
        <div className="title">
          <span>Name</span>
          <span>Price</span>
        </div>
        <InfoTittle />
        <InfoItem />
      </div>
    );
  }
}

export default Info;
