import React, { Component } from "react";
import { connect } from "react-redux";
import { switchRecmd } from "../../../store/actions";
import { dataRemake } from "../../../store/selectors";
import Recmd from "./Recmd";
class RecmdContainer extends Component {
  state = {};
  render() {
    return (
      <div>
        <Recmd {...this.props}></Recmd>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    recmdActive: state.recommend.recmdActive,
    recmdLRe: dataRemake(state.recommend.recmdL),
    recmdRRe: dataRemake(state.recommend.recmdR)
  };
};
export default connect(
  mapStateToProps,
  { switchRecmd }
)(RecmdContainer);
