import React, { Component } from "react";

import axios from "axios";
import store from "../store";
class Address extends Component {
  state = {};
  componentDidMount = () => {
    axios.get("http://localhost:5000/address").then(res => {
      setTimeout(() => {
        store.dispatch({ type: "GETADDRESS", payload: res.data });
      }, 1000);
    });
  };
  updateAddress = () => {
    axios
      .patch("http://localhost:5000/address", { detail: "竹海小区" })
      .then(res => {
        store.dispatch({
          type: "NEWADDRESS",
          payload: res.data
        });
      });
  };
  render() {
    return (
      <div>
        <div>
          {this.props.address ? (
            <div>
              <span>所在省:{this.props.address.province}</span>
              <br />
              <span>所在市:{this.props.address.city}</span>
              <br />
              <span>所在区:{this.props.address.district}</span>
              <br />
              <span>详细地址:{this.props.address.detail}</span>
            </div>
          ) : (
            <div>请稍等...</div>
          )}
        </div>
        <button onClick={this.updateAddress}>修改地址</button>
      </div>
    );
  }
}

export default Address;
