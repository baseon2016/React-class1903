import React, { Component } from "react";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import "./myswiper.css";
class MySwiper extends Component {
  componentDidMount() {
    const { direction, loop, className, slidesPerView } = this.props;
    new Swiper(`.${className}`, {
      direction, // 垂直切换选项
      loop, // 循环模式选项

      slidesPerView,
      // 如果需要前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }
  render() {
    const { pics, className } = this.props;
    return (
      <div className="swiper">
        <div className={`swiper-container ${className}`}>
          <div className="swiper-wrapper">
            {pics.map((ele, index) => (
              <div key={ele + index} className="swiper-slide">
                <img src={ele} alt="" />
              </div>
            ))}
          </div>
          <div className="swiper-button-prev" />
          <div className="swiper-button-next" />
        </div>
      </div>
    );
  }
}

export default MySwiper;
