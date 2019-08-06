import React, { Component } from "react";
class Search extends Component {
  // 转移到父组件内，换一种写法
  // state = {
  //   checker: false,
  //   searcher: ""
  // };
  // checking = event => {
  //   this.setState({
  //     checker: event.target.checked
  //   });
  // };
  // searching = event => {
  //   this.setState({
  //     searcher: event.target.value
  //   });
  // };
  search = event => {
    if (event.key === "Enter") {
      this.props.search();
    }
  };
  // componentDidUpdate = (prevProps, prevState) => {
  //   if (this.props.checker !== prevProps.checker) {
  //     this.props.hasStock();
  //   }
  // };

  render() {
    const { checker, searcher, handleInput } = this.props;
    return (
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          value={searcher}
          onChange={event => handleInput("searcher", event)}
          onKeyPress={this.search}
        />
        <div>
          <input
            type="checkbox"
            id="term"
            value={checker}
            onChange={event => handleInput("checker", event)}
          />
          <label htmlFor="term">Only show products in stock</label>
        </div>
      </div>
    );
  }
}

export default Search;
