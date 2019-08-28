import { COMMENT_NUM } from "../actionTypes";
export default (state = 2, action) => {
  switch (action.type) {
    case COMMENT_NUM:
      if (state < action.payload) {
        return action.payload;
      } else {
        return 2;
      }
    default:
      return state;
  }
};
