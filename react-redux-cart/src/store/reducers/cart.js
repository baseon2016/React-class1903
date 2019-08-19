import { ADD_CART, QTY_ADD, QTY_MINUS } from "../actionTypes";
const initialState = {
  productIdInCart: ["1", "2"],
  quantityById: {
    "1": 3,
    "2": 2
  }
};
export default (state = initialState, action) => {
  const { productIdInCart, quantityById } = state;
  const id = action.payload;
  switch (action.type) {
    case ADD_CART:
      if (productIdInCart.indexOf(id) === -1) {
        return {
          productIdInCart: [...productIdInCart, id],
          quantityById: { ...quantityById, [id]: 1 }
        };
      } else {
        return {
          productIdInCart: [...productIdInCart],
          quantityById: {
            ...quantityById,
            [id]: quantityById[id] + 1
          }
        };
      }
    case QTY_ADD:
      return {
        productIdInCart: [...productIdInCart],
        quantityById: {
          ...quantityById,
          [id]: quantityById[id] + 1
        }
      };
    case QTY_MINUS:
      if (quantityById[id] > 1) {
        return {
          productIdInCart: [...productIdInCart],
          quantityById: {
            ...quantityById,
            [id]: quantityById[id] - 1
          }
        };
      } else {
        const newQty = { ...quantityById };
        delete newQty[id];
        return {
          productIdInCart: productIdInCart.filter(ele => ele !== id),
          quantityById: newQty
        };
      }
    default:
      return state;
  }
};
