import React from "react";
import { connect } from "react-redux";
import Cart from "./Cart";
import { qtyAdd, qtyMinus } from "../store/actions";
const CartContainer = props => {
  return <Cart {...props} />;
};
const mapStateToProps = state => {
  return {
    cart: state.cart,
    products: state.products
  };
};
export default connect(
  mapStateToProps,
  { qtyAdd, qtyMinus }
)(CartContainer);
