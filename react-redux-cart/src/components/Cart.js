import React, { Component } from "react";
import { showCart } from "../store/selectors";
class Cart extends Component {
  render() {
    const { productIdInCart } = this.props.cart;
    const { quantityById } = this.props.cart;
    const { products } = this.props;
    const content =
      products.length && productIdInCart.length ? (
        <ul>
          {showCart(productIdInCart, quantityById, products).map(ele => (
            <li key={ele.id} className="cart-item df">
              <span>{ele.name}</span>
              <span>{ele.price}</span>
              <span>{ele.qty}</span>
            </li>
          ))}
        </ul>
      ) : (
        "请添加商品到购物车"
      );
    return <div>{content}</div>;
  }
}

export default Cart;
