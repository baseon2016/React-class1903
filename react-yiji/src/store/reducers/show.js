import { SWITCH_SHOW } from "../actionTypes";
const initialState = {
  showActive: false,
  onShow: [
    {
      id: "a1",
      url:
        "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/onshow-1.png",
      likes: 159,
      views: 394,
      comments: 9,
      deadline: 10,
      type: "exhibition",
      articleDetails: {
        titleImg:
          "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/articles/article-title.png",
        showText:
          "本次展览将从人像摄影室肖全为杨丽萍拍摄的中低频摄影中挑选出一组精品向观众展示。<br />一个是舞之精灵，美的化身；一个被誉为中国最好的人像摄影家，两人的心灵碰撞，会擦出什么样的艺术火花？摄影师镜头下真是的杨丽萍是什么样的？25日开始的“心动”展，无疑极大的聊起了人们的好奇心。",
        authorImg:
          "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/articles/article-author.png",
        authorText:
          "肖全，男，1959年生于四川成都，曾任深圳《街道 》杂志摄影记苜，被称为'中国最好的人像摄影师'。1980年代中期开始'我们这一代'拍摄，1991年出版《天堂之鸟》三毛摄影专集，1992年在瑞士举办个展，1993年在法国参加摄影联展，1997年出版《我们这一代》。2000年出版《我镜头下的美丽女人》。",
        showImg: [
          "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/articles/article-1.png",
          "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/articles/article-2.png",
          "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/articles/article-3.png"
        ],

        comments: [
          {
            id: "p1",
            commentText: "挺好的，特别喜欢这种风格",
            userImg:
              "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/userImg.png",
            userName: "阿德",
            commentTime: "2019.8.27"
          },
          {
            id: "p2",
            commentText: "挺好的，特别喜欢这种风格",
            userImg:
              "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/userImg.png",
            userName: "阿德",
            commentTime: "2019.8.27"
          },
          {
            id: "p3",
            commentText: "挺好的，特别喜欢这种风格",
            userImg:
              "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/userImg.png",
            userName: "阿德",
            commentTime: "2019.8.27"
          }
        ]
      }
    },
    {
      id: "a2",
      url:
        "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/onshow-2.png",
      likes: 239,
      views: 526,
      comments: 52,
      deadline: 12,
      type: "exhibition"
    },
    {
      id: "a3",
      url:
        "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/onshow-3.png",
      likes: 319,
      views: 226,
      comments: 39,
      deadline: -1,
      type: "exhibition"
    },
    {
      id: "a4",
      url:
        "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/onshow-4.png",
      likes: 119,
      views: 926,
      comments: 109,
      deadline: 2,
      type: "exhibition"
    },
    {
      id: "a5",
      url:
        "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/onshow-5.png",
      likes: 909,
      views: 1250,
      comments: 179,
      deadline: 35,
      type: "exhibition"
    }
  ],
  toShow: [
    {
      id: "aa1",
      url:
        "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/toshow-1.png",
      likes: 159,
      views: 394,
      comments: 9,
      deadline: 60,
      type: "exhibition"
    },
    {
      id: "aa2",
      url:
        "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/toshow-2.png",
      likes: 821,
      views: 1394,
      comments: 56,
      deadline: 80,
      type: "exhibition"
    },
    {
      id: "aa3",
      url:
        "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/toshow-3.png",
      likes: 151,
      views: 1194,
      comments: 123,
      deadline: 90,
      type: "exhibition"
    },
    {
      id: "aa4",
      url:
        "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/toshow-4.png",
      likes: 1159,
      views: 2394,
      comments: 401,
      deadline: 119,
      type: "exhibition"
    },
    {
      id: "aa5",
      url:
        "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/toshow-5.png",
      likes: 159,
      views: 394,
      comments: 9,
      deadline: 49,
      type: "exhibition"
    },
    {
      id: "aa6",
      url:
        "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/toshow-6.png",
      likes: 9,
      views: 194,
      comments: 5,
      deadline: 140,
      type: "exhibition"
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
