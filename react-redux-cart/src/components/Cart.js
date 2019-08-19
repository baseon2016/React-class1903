import React, { Component } from "react";
import { showCart, totalCost } from "../store/selectors";
class Cart extends Component {
  render() {
    const { cart, products, qtyAdd, qtyMinus } = this.props;
    const content =
      products.length && cart.productIdInCart.length ? (
        <ul>
          {showCart(cart, products).map(ele => (
            <li key={ele.id} className="cart-item df">
              <span>{ele.name}</span>
              <span>{ele.price}</span>
              <button onClick={() => qtyMinus(ele.id)}>-</button>
              <span>{ele.qty}</span>
              <button
                onClick={() => qtyAdd(ele.id)}
                disabled={
                  cart.quantityById[ele.id] === ele.inventory ? true : false
                }
              >
                +
              </button>
            </li>
          ))}
        </ul>
      ) : (
        "请添加商品到购物车"
      );
    return (
      <div>
        {content}
        <br />
        <span>总价:{totalCost(cart, products)}</span>
      </div>
    );
  }
}

export default Cart;
