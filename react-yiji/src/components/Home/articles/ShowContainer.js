import React, { Component } from "react";
import { connect } from "react-redux";
import Show from "./Show";
import { switchShow } from "../../../store/actions";
import { dataRemake } from "../../../store/selectors";
class ShowContainer extends Component {
  state = {};
  render() {
    return (
      <div>
        <Show {...this.props} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    showActive: state.show.showActive,
    onShowRe: dataRemake(state.show.onShow),
    toShowRe: dataRemake(state.show.toShow)
  };
};
export default connect(
  mapStateToProps,
  { switchShow }
)(ShowContainer);
