import React, { Component } from "react";
import Info from "./Info";
import Search from "./Search";
import "./../css/home.css";
import axios from "axios";
class Home extends Component {
  state = {
    showProducts: []
  };
  componentDidMount = () => {
    axios.get("http://localhost:5000/products").then(res => {
      this.setState({
        showProducts: res.data
      });
    });
  };
  hasStock = val => {
    axios.get("http://localhost:5000/products").then(res => {
      this.setState({
        showProducts: res.data.filter(ele => {
          if (val === true) {
            return ele.stocked === true;
          }
          return true;
        })
      });
    });
  };
  search = searchStr => {
    axios.get("http://localhost:5000/products").then(res => {
      this.setState({
        showProducts: res.data.filter(ele => {
          return ele.name.indexOf(searchStr) !== -1;
        })
      });
    });
  };
  render() {
    const { showProducts } = this.state;
    return (
      <div className="home">
        <Search hasStock={this.hasStock} search={this.search} />
        <Info showProducts={showProducts} />
      </div>
    );
  }
}

export default Home;
