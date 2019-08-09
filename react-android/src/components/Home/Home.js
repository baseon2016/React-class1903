import React, { Component } from "react";
import MySwiper from "../MySwiper/MySwiper";
import "./home.css";
class Home extends Component {
  state = {};

  render() {
    const swiper1 = {
      pics: [
        "https://wanandroid.com/blogimgs/4f66c08e-d8b6-470d-9c8c-eeed9dbfb2a3.png"
      ],
      direction: "horizontal", // 垂直切换选项
      loop: true, // 循环模式选项
      className: "swiper1",
      slidesPerView: 1
    };
    const swiper2 = {
      pics: [
        "https://www.wanandroid.com/blogimgs/62c1bd68-b5f3-4a3c-a649-7ca8c7dfabe6.png",
        "https://www.wanandroid.com/blogimgs/90c6cc12-742e-4c9f-b318-b912f163b8d0.png",
        "https://www.wanandroid.com/blogimgs/50c115c2-cf6c-4802-aa7b-a4334de444cd.png"
      ],
      direction: "vertical", // 垂直切换选项
      loop: true, // 循环模式选项
      className: "swiper2",
      slidesPerView: 2
    };
    return (
      <div>
        <div className="my-swiper">
          <div className="swiper-h">
            <MySwiper {...swiper1} />
          </div>
          <div className="swiper-v">
            <MySwiper {...swiper2} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
