import React, { Component } from "react";
import HomeTop from "../HomeTop";
import MySwiper from "../../MySwiper/MySwiper";
import "./articles.css";
import ShowContainer from "./ShowContainer";
class Articles extends Component {
  state = {};
  render() {
    const bannerSwiper = {
      contents: [
        {
          id: "1",
          url:
            "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/banner-1.jpg"
        },
        {
          id: "2",
          url:
            "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/banner-2.jpg"
        },
        {
          id: "3",
          url:
            "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/banner-3.jpg"
        }
      ],
      direction: "horizontal", // 垂直切换选项
      loop: true, // 循环模式选项
      swiperId: "swiper-banner",
      slidesPerView: 1,
      pagination: {
        el: "swiper-pagination"
      }
    };
    const categorySwiper = {
      contents: [
        {
          id: "1",
          url:
            "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/category-1.png"
        },
        {
          id: "2",
          url:
            "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/category-2.png"
        },
        {
          id: "3",
          url:
            "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/category-3.png"
        },
        {
          id: "4",
          url:
            "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/category-4.png"
        },
        {
          id: "5",
          url:
            "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/category-5.png"
        },
        {
          id: "6",
          url:
            "https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/category-6.png"
        }
      ],
      swiperId: "swiper-category",
      slidesPerView: 2.5
    };
    return (
      <div>
        <HomeTop />
        <div className="banner">
          <MySwiper {...bannerSwiper} />
        </div>
        <div className="category">
          <MySwiper {...categorySwiper} />
        </div>
        <ShowContainer />
      </div>
    );
  }
}

export default Articles;
