import React, { Component } from "react";
import store from "../store";
class Count extends Component {
  render() {
    console.log(store);
    const { count } = store.getState();
    return (
      <div>
        <button onClick={() => store.dispatch({ type: "DEL" })}>-</button>
        <span>计数：{count}</span>
        <button onClick={() => store.dispatch({ type: "ADD" })}>+</button>
      </div>
    );
  }
}

export default Count;
