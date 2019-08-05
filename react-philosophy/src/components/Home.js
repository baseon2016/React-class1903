import React, { Component } from "react";
import Info from "./Info";
import Search from "./Search";
class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        <Search />
        <Info />
      </div>
    );
  }
}

export default Home;
