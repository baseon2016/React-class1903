//actions创建函数
import { GET_PRODUCTS, ADD_CART, QTY_ADD, QTY_MINUS } from "./actionTypes";
import axios from "axios";
const getProducts = () => dispatch => {
  const url = "http://localhost:5000/products";
  axios.get(url).then(res => {
    dispatch({ type: GET_PRODUCTS, payload: res.data });
  });
};
const addCart = id => {
  return {
    type: ADD_CART,
    payload: id
  };
};
const qtyAdd = id => {
  return {
    type: QTY_ADD,
    payload: id
  };
};
const qtyMinus = id => {
  return {
    type: QTY_MINUS,
    payload: id
  };
};
export { getProducts, addCart, qtyAdd, qtyMinus };
