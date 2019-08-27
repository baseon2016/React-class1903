import React, { Component } from "react";
import { connect } from "react-redux";
import { switchUserActive } from "../../../store/actions";
import { dataRemake } from "../../../store/selectors";
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
  return {
    ...state.user,
    userExhtionLRe: dataRemake(state.user.userExhtionL),
    userExhtionRRe: dataRemake(state.user.userExhtionR)
  };
};
export default connect(
  mapStateToProps,
  { switchUserActive }
)(UserContainer);
