import React, { Component } from "react";
import { connect } from "react-redux";
import { switchUserInfo } from "../../../store/actions";
import "./userinfo.css";
class UserInfo extends Component {
  render() {
    const { headShot2, changing, switchUserInfo } = this.props;
    return (
      <div className="user-info po-r">
        <div className="info-content">
          <img
            src="https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/user-info.png"
            alt=""
          />
          <div
            className="user-headshot po-a"
            onClick={() => switchUserInfo(true)}
          >
            <img src={headShot2} alt=""></img>
          </div>
          <div className="back po-a" onClick={this.props.history.goBack}>
            <img
              src="https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/user-info-pre.png"
              alt=""
            />
          </div>
        </div>
        <div
          className={`mask po-a ${changing ? "db" : "dn"}`}
          onClick={() => switchUserInfo(false)}
        ></div>
        <div className={`change-info po-f ${changing ? "" : "off"}`}>
          <div className="change-inner">
            <div className="change-func">
              <span>进入相册选择</span>
              <span>拍一张</span>
            </div>
            <span
              className="change-cancel"
              onClick={() => switchUserInfo(false)}
            >
              取消
            </span>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    ...state.userinfo
  };
};
export default connect(
  mapStateToProps,
  { switchUserInfo }
)(UserInfo);
