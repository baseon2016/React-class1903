import { SWITCH_USERACTIVE } from "../actionTypes";
const initialState = {
  userName: "阴雨天",
  headShot:
    "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/user-headshot-1.png",
  bgUrl:
    "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/user-bg.png",
  follows: 11,
  posts: 9,
  visitors: 49,
  userActive: false,
  userExhtionL: [
    {
      id: "1",
      url:
        "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/user-exhibition-1.png"
    },
    {
      id: "2",
      url:
        "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/user-exhibition-2.png"
    }
  ],
  userExhtionR: [
    {
      id: "1",
      url:
        "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/user-exhibition-1.png"
    },
    {
      id: "2",
      url:
        "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/user-exhibition-2.png"
    }
  ]
};
export default (state = initialState, action) => {
  const { userActive } = state;
  switch (action.type) {
    case SWITCH_USERACTIVE:
      return {
        ...state,
        userActive: !userActive
      };
    default:
      return state;
  }
};
