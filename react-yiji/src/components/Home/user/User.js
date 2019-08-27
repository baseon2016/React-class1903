import React, { Component } from "react";
import Tab from "../Tab";
import "./user.css";
class User extends Component {
  state = {};
  render() {
    console.log(this.props);
    const {
      userName,
      headShot,
      headShot2,
      follows,
      posts,
      visitors,
      collectExhibition,
      collectArticles,
      userActive,
      userExhtionLRe,
      userExhtionRRe,
      switchUserActive
    } = this.props;
    return (
      <div className="user">
        <div className="user-top">
          <div>
            <img src={headShot} alt="" />
          </div>
          <h3>{userName}</h3>
          <div className="interact">
            <div>
              <span>关注</span>
              <span>{follows}</span>
            </div>
            <div>
              <span>发布</span>
              <span>{posts}</span>
            </div>
            <div>
              <span>访客</span>
              <span>{visitors}</span>
            </div>
          </div>
          <div className="settings">setting</div>
        </div>
        <div className="my-collection">
          <div className="my-title">
            <span>艺象云集</span>
            <span>ALL ></span>
          </div>
          <div className="collection">
            <div>
              <img
                src="https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/user-collection-1.png"
                alt=""
              />
              <p>
                订阅/<span>{collectExhibition.length}</span>
              </p>
            </div>
            <div>
              <img
                src="https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/user-collection-2.png"
                alt=""
              />
              <p>
                订阅/<span>{collectArticles.length}</span>
              </p>
            </div>
            <div>
              <img
                src="https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/user-collection-3.png"
                alt=""
              />
              <p>
                订阅/<span>49</span>
              </p>
            </div>
          </div>
        </div>
        <div className="user-bottom">
          <Tab
            active={userActive}
            leftData={userExhtionLRe}
            rightData={userExhtionRRe}
            switcher={switchUserActive}
            tabTitle={{ left: "原创", right: "缓存" }}
          ></Tab>
        </div>
      </div>
    );
  }
}

export default User;
