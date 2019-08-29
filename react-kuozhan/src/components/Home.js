import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import "./home.css";
class Home extends Component {
  state = {
    show: false
  };
  render() {
    const { show } = this.state;
    return (
      <div style={{ width: "100vw", height: "60vh", backgroundColor: "red" }}>
        <button type="button" onClick={() => this.setState({ show: !show })}>
          Click to Enter
        </button>
        <CSSTransition in={this.state.show} timeout={5200} classNames="fade">
          <div>{"I'll receive fade-* classes"}</div>
        </CSSTransition>
      </div>
    );
  }
}

export default Home;
