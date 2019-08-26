import React, { Component } from "react";
import { connect } from "react-redux";
import Show from "./Show";
import { switchShow } from "../../../store/actions";
import { showRe } from "../../../store/selectors";
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
    onShowRe: showRe(state.show.onShow),
    toShowRe: showRe(state.show.toShow)
  };
};
export default connect(
  mapStateToProps,
  { switchShow }
)(ShowContainer);
