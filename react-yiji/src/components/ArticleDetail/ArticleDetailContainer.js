import React, { Component } from "react";
import { connect } from "react-redux";
import ArticleDetail from "./ArticleDetail";
class ArticleDetailContainer extends Component {
  state = {};
  render() {
    const detail = this.props.concatAll.find(
      ele => ele.id === this.props.match.params.id
    );
    return (
      <div>
        <ArticleDetail detail={detail}></ArticleDetail>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { onShow, toShow } = state.show;
  const { recmdL, recmdR } = state.recommend;
  return {
    concatAll: [...onShow, ...toShow, ...recmdL, ...recmdR]
  };
};
export default connect(mapStateToProps)(ArticleDetailContainer);
