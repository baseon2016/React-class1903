import { ADD_CART } from "../actionTypes";
const initialState = {
  productIdInCart: ["1", "2"],
  quantityById: {
    "1": 3,
    "2": 2
  }
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      const { productIdInCart } = state;
      const { quantityById } = state;
      if (productIdInCart.indexOf(action.payload) === -1) {
        return {
          productIdInCart: [...productIdInCart, action.payload],
          quantityById: { ...quantityById, [action.payload]: 1 }
        };
      } else {
        return {
          productIdInCart: [...productIdInCart],
          quantityById: {
            ...quantityById,
            [action.payload]: quantityById[action.payload] + 1
          }
        };
      }
    default:
      return state;
  }
};
