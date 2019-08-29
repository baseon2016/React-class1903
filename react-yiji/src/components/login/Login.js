import React, { Component } from "react";
import "./login.css";
import { connect } from "react-redux";
import { toggleAgree } from "../../store/actions";
class Login extends Component {
  state = {
    userName: "Devin",
    userPassword: "5201314"
  };
  login = () => {
    if (
      this.state.userName === "Devin" &&
      this.state.userPassword === "5201314"
    ) {
      sessionStorage.setItem('token',this.state.userName+this.state.userPassword)
      sessionStorage.setItem('user',this.state.userName)
      this.props.history.push("/home");
    }else{
      alert('账号密码不正确')
    }
  };
  nameInput = e => {
    this.setState({
      ...this.state,
      userName: e.target.value
    });
  };
  passwordInput = e => {
    this.setState({
      ...this.state,
      userPassword: e.target.value
    });
  };
  render() {
    const { agreement } = this.props;
    const { userName, userPassword } = this.state;
    return (
      <div className="login">
        <div className="login-inner">
          <div className="login-form">
            <div>
              <input
                type="text"
                placeholder="点击输入手机号/Email登录"
                onChange={e => this.nameInput(e)}
                value={userName}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="输入密码"
                onChange={e => this.passwordInput(e)}
                value={userPassword}
              />
            </div>
            <div className="login-btn df">
              <span to="/home" className="click-bar" onClick={this.login}>
                登录
              </span>
              <span to="/home" className="click-bar">
                注册
              </span>
            </div>
          </div>
          <div
            className="agree-info click-bar df"
            onClick={this.props.toggleAgree}
          >
            {agreement ? (
              <img
                src="https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/images/%E5%BC%95%E5%AF%BC%E9%A1%B5/%E5%9C%86%E7%82%B91_u25.png"
                alt=""
              />
            ) : (
              <img
                src="https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/images/%E5%BC%95%E5%AF%BC%E9%A1%B5/%E5%9C%86%E7%82%B91_u25_disabled.png"
                alt=""
              />
            )}
            <p>
              登录或注册即同意艺集<span>用户服务协议</span>
            </p>
          </div>
        </div>
        <div className="share df">
          <div>
            <img
              src="https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/weibo.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/weixin.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/qq.png"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    agreement: state.login
  };
};
export default connect(
  mapStateToProps,
  { toggleAgree }
)(Login);
