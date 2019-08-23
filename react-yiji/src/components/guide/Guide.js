import React, { Component } from "react";
import MySwiper from "../MySwiper/MySwiper";
import { connect } from "react-redux";
import { changeIndex } from "../../store/actions";
import "./guide.css";
import TodayPush from "./TodayPush";
class Guide extends Component {
  componentDidMount() {}
  render() {
    // const { activeIndex, changeIndex } = this.props;
    const guideSwiper = {
      contents: [
        {
          id: "1",
          url:
            "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/lead1.jpg",
          component: null
        },
        {
          id: "2",
          url:
            "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/lead2.jpg",
          component: null
        },
        {
          id: "3",
          url:
            "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/lead3.jpg",
          component: null
        },
        {
          id: "4",
          url:
            "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/lead4.jpg",
          component: null
        },
        {
          id: "5",
          url:
            "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/lead5.jpg",
          component: <TodayPush />
        }
        // {
        //   id: "6",
        //   url:
        //     "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/lead6.jpg",
        //   component: null
        // }
      ],
      direction: "horizontal", // 垂直切换选项
      loop: false, // 循环模式选项
      swiperId: "swiper-guide",
      slidesPerView: 1,
      allowSlidePrev: false
      // changeIndex
    };

    return (
      <div className="guide po-r">
        <MySwiper {...guideSwiper} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    activeIndex: state.guide
  };
};
export default connect(
  mapStateToProps,
  { changeIndex }
)(Guide);
