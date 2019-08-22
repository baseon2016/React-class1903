import React, { Component } from "react";
import MySwiper from "./MySwiper/MySwiper";
import "./guide.css";
class Guide extends Component {
  state = {};
  componentDidMount() {}
  render() {
    const guideSwiper = {
      pics: [
        "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/%E8%89%BA%E9%9B%86jpg/1%E5%BC%95%E5%AF%BC%E9%A1%B5/%E5%BC%95%E5%AF%BC%E9%A1%B51.jpg",
        "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/%E8%89%BA%E9%9B%86jpg/1%E5%BC%95%E5%AF%BC%E9%A1%B5/%E5%BC%95%E5%AF%BC%E9%A1%B52.jpg",
        "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/%E8%89%BA%E9%9B%86jpg/1%E5%BC%95%E5%AF%BC%E9%A1%B5/%E5%BC%95%E5%AF%BC%E9%A1%B53.jpg",
        "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/%E8%89%BA%E9%9B%86jpg/1%E5%BC%95%E5%AF%BC%E9%A1%B5/%E5%BC%95%E5%AF%BC%E9%A1%B54.jpg",
        "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/%E8%89%BA%E9%9B%86jpg/2%E7%99%BB%E5%BD%95/%E6%AC%A2%E8%BF%8E%E9%A1%B5.jpg"
      ],
      direction: "horizontal", // 垂直切换选项
      loop: false, // 循环模式选项
      swiperId: "swiper-guide",
      slidesPerView: 1
      // navigation: {
      //   nextEl: "swiper-button-next",
      //   prevEl: "swiper-button-prev"
      // },
      // pagination: {
      //   el: "swiper-pagination"
      // }
    };
    return (
      <div className="guide po-r">
        <MySwiper {...guideSwiper} />
        <div className="push dn po-a">
          <h3>-2019/08/22-</h3>
          <span>今日推送>></span>
        </div>
      </div>
    );
  }
}

export default Guide;
