import React, { Component } from "react";
import "./../css/loop.css";
class Loop extends Component {
  state = {
    pics: [
      {
        id: "1",
        picSrc:
          "https://img20.360buyimg.com/pop/s1180x940_jfs/t1/69877/21/5662/98765/5d3e929fE42ab508f/9eec2a0e8d4a19e7.jpg.webp"
      },
      {
        id: "2",
        picSrc:
          "https://img13.360buyimg.com/pop/s1180x940_jfs/t1/83196/18/3149/187032/5d15d865Ee3000b1c/bf4bc9f43013cbc8.jpg.webp"
      },
      {
        id: "3",
        picSrc:
          "https://img30.360buyimg.com/pop/s1180x940_jfs/t1/35823/20/14511/66845/5d40f9c1E1ffe61aa/ed536a00c90934c7.jpg.webp"
      },
      {
        id: "4",
        picSrc:
          "https://img20.360buyimg.com/pop/s1180x940_jfs/t1/39591/32/12418/99559/5d3af6f4E3857ea51/595ece114ea5cbd7.jpg.webp"
      }
    ],
    activeInd: 1,
    isTrans: true
  };
  change = index => {
    this.setState({
      isTrans: true,
      activeInd: index
    });
  };

  next = () => {
    const { activeInd } = this.state;
    const len = this.newPics.length;
    console.log(this.newPics);
    //setState 是异步函数，所以，修改state之后直接获取state参数是不能获得更新之后的数据,所以此处使用timeout 获取state数据并判断
    this.setState({
      activeInd: activeInd + 1,
      isTrans: true
    });
    setTimeout(() => {
      if (this.state.activeInd === len - 1) {
        this.setState({
          activeInd: 1,
          isTrans: false
        });
      }
    }, 500);
  };
  prev = () => {
    const { activeInd } = this.state;
    const len = this.newPics.length;
    this.setState({
      activeInd: activeInd - 1,
      isTrans: true
    });
    setTimeout(() => {
      if (this.state.activeInd === 0) {
        this.setState({
          activeInd: len - 2,
          isTrans: false
        });
      }
    }, 500);
  };
  // 组件更新state 默认会触发声明周期componentDidUpdate

  // conponentDidUpdate() {
  //   const { activeInd } = this.state;
  //   setTimeout(() => {
  //     if (activeInd === len - 1) {
  //       this.setState({
  //         activeInd: 1,
  //         isTrans: false
  //       });
  //     } else if (activeInd === 0) {
  //       this.setState({
  //         activeInd: len - 2,
  //         isTrans: false
  //       });
  //     }
  //   }, 500);
  // }
  // render内部不能更新state 因为state更新会触发render函数 会陷入死循环
  render() {
    const { pics, activeInd, isTrans } = this.state;
    const headItem = { ...pics[pics.length - 1], id: Date.now() };
    const footItem = { ...pics[0], id: Date.now() - 20 };
    this.newPics = [headItem, ...pics, footItem];
    let imgList = this.newPics.map(ele => (
      <img key={ele.id} src={ele.picSrc} alt="" />
    ));
    const pageList = pics.map((ele, index) => (
      <li
        key={ele.id}
        className={
          activeInd - 1 === index ||
          (activeInd === 0 && index === pics.length - 1) ||
          (activeInd === this.newPics.length - 1 && index === 0)
            ? "active"
            : ""
        }
        onClick={() => this.change(index + 1)}
      />
    ));
    return (
      <div className="loop-wrap">
        <div className="loop">
          <div
            className="loop-img"
            style={{
              marginLeft: activeInd * -590 + "px",
              transition: isTrans ? "all .5s" : "none"
            }}
          >
            {imgList}
          </div>
          <ul className="pagination">{pageList}</ul>
          <div className="prev" onClick={this.prev}>
            左
          </div>
          <div className="next" onClick={this.next}>
            右
          </div>
        </div>
      </div>
    );
  }
}

export default Loop;
