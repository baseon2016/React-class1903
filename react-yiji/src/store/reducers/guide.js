import { CHANGE_INDEX } from "../actionTypes";
export default (state = 0, action) => {
  switch (action.type) {
    case CHANGE_INDEX:
      return action.payload;

    default:
      return state;
  }
};
