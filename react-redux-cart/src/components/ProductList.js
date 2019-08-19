import React, { Component } from "react";
class ProductList extends Component {
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    const { products, cart } = this.props;
    const content = products.length ? (
      <ul>
        {products.map(ele => (
          <li key={ele.id}>
            {ele.name}
            <button
              onClick={() => this.props.addCart(ele.id)}
              disabled={
                cart.quantityById[ele.id] === ele.inventory ? true : false
              }
            >
              {cart.quantityById[ele.id] === ele.inventory
                ? "卖完了"
                : "添加到购物车"}
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

export default ProductList;
