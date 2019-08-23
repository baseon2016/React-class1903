import React, { Component } from "react";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import "./myswiper.css";
class MySwiper extends Component {
  componentDidMount() {
    const {
      direction,
      loop,
      swiperId,
      slidesPerView,
      navigation,
      pagination,
      allowSlidePrev
    } = this.props;
    new Swiper(`#${swiperId}`, {
      direction, // 垂直切换选项
      loop, // 循环模式选项

      slidesPerView,
      // 如果需要前进后退按钮
      navigation: navigation
        ? {
            nextEl: `.${navigation.nextEl}`,
            prevEl: `.${navigation.prevEl}`
          }
        : {},
      pagination: pagination
        ? {
            el: `.${pagination.el}`
          }
        : {},
      allowSlidePrev: allowSlidePrev === undefined ? true : allowSlidePrev
      // on: {
      //   slideChange: function() {
      //     changeIndex(this.activeIndex);
      //   }
      // }
    });
  }
  render() {
    const { contents, swiperId, navigation, pagination } = this.props;
    return (
      <div className="swiper">
        <div className="swiper-container" id={`${swiperId}`}>
          <div className="swiper-wrapper">
            {contents.map(ele => (
              <div
                key={ele.id}
                className="swiper-slide"
                style={{
                  backgroundImage: "url(" + ele.url + ")",
                  backgroundSize: "cover"
                }}
              >
                {ele.component ? ele.component : ""}
              </div>
            ))}
          </div>
          {navigation ? (
            <div>
              <div className={navigation.prevEl} />
              <div className={navigation.nextEl} />
            </div>
          ) : (
            ""
          )}
          {pagination ? <div className={pagination.el} /> : ""}
        </div>
      </div>
    );
  }
}

export default MySwiper;
