import React, { Component } from "react";
import Info from "./Info";
import Search from "./Search";
import "./../css/home.css";
import axios from "axios";
class Home extends Component {
  state = {
    products: [],
    computeProducts: [],
    checker: false,
    searcher: ""
  };
  componentDidMount = () => {
    axios.get("http://localhost:5000/products").then(res => {
      this.setState({
        products: res.data,
        computeProducts: res.data
      });
    });
  };
  handleInput = (name, event) => {
    const target = event.target;
    const targetVal =
      target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: targetVal
    });
  };
  // hasStock = () => {
  //   const { checker, computeProducts } = this.state;
  //   this.setState({
  //     computeProducts: computeProducts
  //   });
  // };
  search = () => {
    const { products, searcher } = this.state;
    this.setState({
      computeProducts: products.filter(ele => {
        return ele.name.indexOf(searcher) !== -1;
      })
    });
  };
  render() {
    const { computeProducts, checker, searcher } = this.state;
    const showProducts = (checker
      ? computeProducts.filter(ele => ele.stocked === true)
      : computeProducts
    ).reduce((rst, item) => {
      if (rst.find(ele => ele.category === item.category)) {
        rst.find(ele => ele.category === item.category).list.push(item);
      } else {
        rst.push({
          category: item.category,
          list: [item]
        });
      }
      return rst;
    }, []);
    return (
      <div className="home">
        <Search
          hasStock={this.hasStock}
          search={this.search}
          checker={checker}
          searcher={searcher}
          handleInput={this.handleInput}
        />
        <Info showProducts={showProducts} />
      </div>
    );
  }
}

export default Home;
