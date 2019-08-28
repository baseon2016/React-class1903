import { SWITCH_USERINFO } from "../actionTypes";
const initialState = {
  headShot2:
    "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/user-headshot-2.png",
  changing: false,
  collection: [
    "aa1",
    "aa2",
    "aa3",
    "aa4",
    "aa5",
    "aa6",
    "bb1",
    "bb2",
    "bb3",
    "bb4",
    "bb5"
  ]
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_USERINFO:
      return {
        ...state,
        changing: action.payload
      };
    default:
      return state;
  }
};
