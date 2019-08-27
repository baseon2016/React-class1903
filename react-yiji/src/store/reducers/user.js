import { SWITCH_USERACTIVE } from "../actionTypes";
const initialState = {
  userName: "阴雨天",
  headShot:
    "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/user-headshot-1.png",
  headShot2:
    "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/user-headshot-2.png",
  bgUrl:
    "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/user-bg.png",
  follows: 11,
  posts: 9,
  visitors: 49,
  collectExhibition: [
    {
      id: "1",
      url:
        "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/toshow-1.png",
      likes: 159,
      views: 394,
      comments: 9,
      deadline: 60
    },
    {
      id: "2",
      url:
        "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/toshow-2.png",
      likes: 821,
      views: 1394,
      comments: 56,
      deadline: 80
    },
    {
      id: "3",
      url:
        "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/toshow-3.png",
      likes: 151,
      views: 1194,
      comments: 123,
      deadline: 90
    }
  ],
  collectArticles: [
    {
      id: "1",
      url:
        "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/recommend-1.png",
      likes: 159,
      views: 394,
      comments: 98
    },
    {
      id: "2",
      url:
        "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/recommend-2.png",
      likes: 169,
      views: 594,
      comments: 1256
    },
    {
      id: "3",
      url:
        "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/recommend-3.png",
      likes: 89,
      views: 224,
      comments: 32
    }
  ],
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
