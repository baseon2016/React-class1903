import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { changeTab } from "../../store/actions";
import "./home-bottom.css";
class HomeBottom extends Component {
  state = {};
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {
    const { pathname } = this.props.location;
    if (prevProps.location.pathname !== pathname) {
      const tab = pathname.replace("/home/", "");
      this.props.changeTab(tab);
    }
  }
  render() {
    const { tab } = this.props;
    return (
      <div className="home-bottom">
        <ul className="df">
          <li>
            <Link to="/home/articles">
              {tab === "articles" ? (
                <img
                  src="https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/icon__zhan_u138.png"
                  alt=""
                />
              ) : (
                <img
                  src="https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/icon__zhan__2_u140.png"
                  alt=""
                />
              )}
            </Link>
          </li>
          <li>
            <Link to="/home/recommend">
              {tab === "recommend" ? (
                <img
                  src="https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/icon__tui_2_u142.png"
                  alt=""
                />
              ) : (
                <img
                  src="https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/icon__tui_u132.png"
                  alt=""
                />
              )}
            </Link>
          </li>
          <li>
            <Link to="/home/post">
              {tab === "post" ? (
                <img
                  src="https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/icon__fa__2_u145.png"
                  alt=""
                />
              ) : (
                <img
                  src="https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/icon__fa_u134.png"
                  alt=""
                />
              )}
            </Link>
          </li>
          <li>
            <Link to="/home/user">
              {tab === "user" ? (
                <img
                  src="https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/icon__ge__2_u148.png"
                  alt=""
                />
              ) : (
                <img
                  src="https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/icon__ge_u136.png"
                  alt=""
                />
              )}
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    tab: state.home
  };
};
export default connect(
  mapStateToProps,
  { changeTab }
)(withRouter(HomeBottom));
