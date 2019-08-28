import { SWITCH_ARTICLESHARE } from "../actionTypes";
const initialState = {
  changing: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_ARTICLESHARE:
      return {
        changing: action.payload
      };
    default:
      return state;
  }
};
