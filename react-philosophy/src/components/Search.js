import React, { Component } from "react";
class Search extends Component {
  state = {
    checker: false,
    searcher: ""
  };
  checking = event => {
    this.setState({
      checker: event.target.checked
    });
  };
  searching = event => {
    this.setState({
      searcher: event.target.value
    });
  };
  search = event => {
    if (event.key === "Enter") {
      this.props.search(event.target.value.trim());
    }
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.checker !== prevState.checker) {
      this.props.hasStock(this.state.checker);
      console.log(this.state.checker);
    }
  };

  render() {
    const { checker, searcher } = this.state;
    return (
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          value={searcher}
          onChange={this.searching}
          onKeyPress={this.search}
        />
        <div>
          <input
            type="checkbox"
            id="term"
            value={checker}
            onChange={this.checking}
          />
          <label htmlFor="term">Only show products in stock</label>
        </div>
      </div>
    );
  }
}

export default Search;
