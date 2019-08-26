import { SWITCH_SHOW } from "../actionTypes";
const initialState = {
  showActive: false,
  onShow: [
    {
      id: "1",
      url:
        "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/onshow-1.png",
      likes: 159,
      views: 394,
      comments: 9,
      deadline: 10
    },
    {
      id: "2",
      url:
        "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/onshow-2.png",
      likes: 239,
      views: 526,
      comments: 52,
      deadline: 12
    },
    {
      id: "3",
      url:
        "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/onshow-3.png",
      likes: 319,
      views: 226,
      comments: 39,
      deadline: -1
    },
    {
      id: "4",
      url:
        "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/onshow-4.png",
      likes: 119,
      views: 926,
      comments: 109,
      deadline: 2
    },
    {
      id: "5",
      url:
        "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/onshow-5.png",
      likes: 909,
      views: 1250,
      comments: 179,
      deadline: 35
    }
  ],
  toShow: [
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
    },
    {
      id: "4",
      url:
        "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/toshow-4.png",
      likes: 1159,
      views: 2394,
      comments: 401,
      deadline: 119
    },
    {
      id: "5",
      url:
        "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/toshow-5.png",
      likes: 159,
      views: 394,
      comments: 9,
      deadline: 49
    },
    {
      id: "6",
      url:
        "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/toshow-6.png",
      likes: 9,
      views: 194,
      comments: 5,
      deadline: 140
    }
  ]
};
export default (state = initialState, action) => {
  const { showActive } = state;
  switch (action.type) {
    case SWITCH_SHOW:
      return {
        ...state,
        showActive: !showActive
      };
    default:
      return state;
  }
};
