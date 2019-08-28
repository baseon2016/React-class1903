import React, { Component } from "react";
import { connect } from "react-redux";
import { switchUserActive } from "../../../store/actions";
import {
  dataToTags,
  collectionType,
  collectionAll
} from "../../../store/selectors";
import User from "./User";
class UserContainer extends Component {
  state = {};
  render() {
    return (
      <div>
        <User {...this.props}></User>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { onShow, toShow } = state.show;
  const { recmdL, recmdR } = state.recommend;
  const {collection}=state.userinfo
  return {
    ...state.user,
    userExhtionLRe: dataToTags(state.user.userExhtionL),
    userExhtionRRe: dataToTags(state.user.userExhtionR),
    collectExhibition: collectionType(collectionAll(collection,[...onShow,...toShow,...recmdL,...recmdR]), "exhibition"),
    collectArticles: collectionType(collectionAll(collection,[...onShow,...toShow,...recmdL,...recmdR]), "articles")
  };
};
export default connect(
  mapStateToProps,
  { switchUserActive }
)(UserContainer);
