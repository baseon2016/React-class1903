import { TOGGLE_AGREE } from "../actionTypes";
export default (state = false, action) => {
  switch (action.type) {
    case TOGGLE_AGREE:
      return !state;
    default:
      return state;
  }
};
