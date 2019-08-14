import React, { Component } from "react";
import store from "../store";
class Count extends Component {
  render() {
    const { count } = this.props;
    console.log(count);
    return (
      <div>
        <button onClick={() => store.dispatch({ type: "DEL" })}>-</button>
        <span>计数:</span>
        <span>{count}</span>
        <button onClick={() => store.dispatch({ type: "ADD" })}>+</button>
        <button
          onClick={() => store.dispatch({ type: "CHANGE", payload: 100 })}
        >
          change
        </button>
      </div>
    );
  }
}

export default Count;
