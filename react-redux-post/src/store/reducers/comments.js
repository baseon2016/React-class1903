import { GET_COMMENTS, ADD_COMMENT, DEL_COMMENT } from "../actionTypes";
export default (state = [], action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return action.payload;

    case ADD_COMMENT:
      return [...state, action.payload];

    case DEL_COMMENT:
      return state.filter(ele => ele.id !== action.payload);
    default:
      return state;
  }
};
