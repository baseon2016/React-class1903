import React, { Component } from "react";
var echarts = require("echarts");
class Echarts extends Component {
  state = {
    data: [
      { value: 335, name: "直接访问" },
      { value: 310, name: "邮件营销" },
      { value: 234, name: "联盟广告" },
      { value: 135, name: "视频广告" },
      { value: 1548, name: "搜索引擎" }
    ]
  };
  updateEcharts = data => {
    this.myChart.setOption({
      title: {
        text: "某站点用户访问来源",
        subtext: "纯属虚构",
        x: "center"
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: "vertical",
        left: "left",
        data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
      },
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: "55%",
          center: ["50%", "60%"],
          data: data,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }
      ]
    });
  };

  componentDidMount() {
    // 基于准备好的dom，初始化echarts实例
    this.myChart = echarts.init(document.getElementById("main"));
    this.updateEcharts(this.state.data);
  }
  componentDidUpdate(prevProps, prevState) {
    this.updateEcharts(this.state.data);
  }
  change = () => {
    const newItem = {
      name: "新数据",
      value: 1008
    };
    this.setState({
      data: [...this.state.data, newItem]
    });
  };
  render() {
    return (
      <div>
        <div id="main" style={{ width: "700px", height: "400px" }}>
          Echarts
        </div>
        <button onClick={this.change}>修改数据</button>
      </div>
    );
  }
}

export default Echarts;
