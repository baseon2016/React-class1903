import React, { Component } from "react";
import { connect } from "react-redux";
import { addCart } from "../store/actions";
class ProductList extends Component {
  componentDidMount() {
    this.props.getProducts();
    console.log(this.props);
  }
  render() {
    const { products } = this.props;
    const content = products.length ? (
      <ul>
        {products.map(ele => (
          <li key={ele.id}>
            {ele.name}
            <button onClick={() => this.props.addCart(ele.id)}>
              添加到购物车
            </button>
          </li>
        ))}
      </ul>
    ) : (
      "请稍等..."
    );
    return <div>{content}</div>;
  }
}

export default connect(
  null,
  { addCart }
)(ProductList);
