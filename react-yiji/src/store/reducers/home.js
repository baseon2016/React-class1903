import { CHANGE_TAB, GET_TAB } from "../actionTypes";
export default (state = "articles", action) => {
  switch (action.type) {
    case CHANGE_TAB:
      return action.payload;
    case GET_TAB:
      return action.payload;
    default:
      return state;
  }
};
