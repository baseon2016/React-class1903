import React, { Component } from "react";
import { connect } from "react-redux";
import ArticleDetail from "./ArticleDetail";
import { commentNum } from "../../store/actions";
class ArticleDetailContainer extends Component {
  render() {
    const { num, concatAll, commentNum } = this.props;
    const detail = concatAll.find(ele => ele.id === this.props.match.params.id);
    const commentsShow = detail.articleDetails.comments.filter((ele, ind) =>
      ind < num ? ele : null
    );
    return (
      <div>
        <ArticleDetail
          detail={detail}
          commentsShow={commentsShow}
          commentNum={commentNum}
          {...this.props}
        ></ArticleDetail>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { onShow, toShow } = state.show;
  const { recmdL, recmdR } = state.recommend;
  return {
    concatAll: [...onShow, ...toShow, ...recmdL, ...recmdR],
    num: state.articleComments
  };
};
export default connect(
  mapStateToProps,
  { commentNum }
)(ArticleDetailContainer);
