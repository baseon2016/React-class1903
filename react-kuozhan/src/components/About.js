import React, { Component } from "react";
class About extends Component {
  state = {};
  render() {
    return (
      <div style={{ width: "100vw", height: "60vh", backgroundColor: "green" }}>
        <img
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567735542&di=944cfcd85a360974f0eea59c38c1f09f&imgtype=jpg&er=1&src=http%3A%2F%2Fpicm.bbzhi.com%2Fdongwubizhi%2Fxiaogoubizhi%2Fxiaogoubizhi_387320_m.jpg"
          alt=""
          style={{ width: "50vw" }}
        />
        <p>文字定位位置</p>
      </div>
    );
  }
}

export default About;
