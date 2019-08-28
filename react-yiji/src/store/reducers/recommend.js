import { SWITCH_RECMD } from "../actionTypes";
const initialState = {
  recmdActive: false,
  recmdL: [
    {
      id: "b1",
      url:
        "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/toshow-2.png",
      likes: 821,
      views: 1394,
      comments: 56,
      deadline: 80,
      type: "articles"
    },
    {
      id: "b2",
      url:
        "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/toshow-3.png",
      likes: 151,
      views: 1126,
      comments: 123,
      deadline: 90,
      type: "articles"
    },
    {
      id: "b3",
      url:
        "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/toshow-4.png",
      likes: 1119,
      views: 2360,
      comments: 401,
      deadline: 119,
      type: "articles"
    }
  ],
  recmdR: [
    {
      id: "bb1",
      url:
        "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/recommend-1.png",
      likes: 159,
      views: 394,
      comments: 98,
      type: "articles"
    },
    {
      id: "bb2",
      url:
        "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/recommend-2.png",
      likes: 169,
      views: 594,
      comments: 1256,
      type: "articles"
    },
    {
      id: "bb3",
      url:
        "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/recommend-3.png",
      likes: 89,
      views: 224,
      comments: 32,
      type: "articles"
    },
    {
      id: "bb4",
      url:
        "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/recommend-4.png",
      likes: 169,
      views: 494,
      comments: 54,
      type: "articles"
    },
    {
      id: "bb5",
      url:
        "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/recommend-5.png",
      likes: 219,
      views: 594,
      comments: 26,
      type: "articles"
    }
  ]
};
export default (state = initialState, action) => {
  const { recmdActive } = state;
  switch (action.type) {
    case SWITCH_RECMD:
      return {
        ...state,
        recmdActive: !recmdActive
      };
    default:
      return state;
  }
};
