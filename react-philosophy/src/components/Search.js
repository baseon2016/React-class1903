import React, { Component } from "react";
import {} from "module";
class Search extends Component {
  state = {};
  render() {
    return (
      <div className="search">
        <input type="text" placeholder="Search..." />
        <div>
          <input type="checkbox" id="term" />
          <label htmlFor="term">Only show products in stock</label>
        </div>
      </div>
    );
  }
}

export default Search;
