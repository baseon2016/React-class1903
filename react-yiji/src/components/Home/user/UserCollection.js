import React, { Component } from "react";
import HomeTop from "../HomeTop";
import { connect } from "react-redux";
import {
  collectionAll,
  collectionType,
  dataRemake
} from "../../../store/selectors";
import "./usercollection.css";
class UserCollection extends Component {
  render() {
    const { type } = this.props.match.params;
    const typeTag =
      type === "exhibition" ? "展讯" : type === "articles" ? "文章" : "全部";
    const collectionShow = dataRemake(
      collectionType(this.props.collection, type)
    );
    return (
      <div className="user-collection">
        <HomeTop hasBack={true}></HomeTop>
        <div className="collection-title df">
          <h3>
            我的订阅<span>·My Subscriptions</span>
          </h3>
          <span>{typeTag}</span>
        </div>
        <div>{collectionShow}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { onShow, toShow } = state.show;
  const { recmdL, recmdR } = state.recommend;
  const { collection } = state.userinfo;
  return {
    collection: collectionAll(collection, [
      ...onShow,
      ...toShow,
      ...recmdL,
      ...recmdR
    ])
  };
};
export default connect(mapStateToProps)(UserCollection);
