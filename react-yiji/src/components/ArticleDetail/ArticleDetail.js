import React, { Component } from "react";
import { connect } from "react-redux";
import "./articledetail.css";
import ArticleDetailBottom from "./ArticleDetailBottom";
import { switchArticleShare } from "../../store/actions";
class ArticleDetail extends Component {
  render() {
    const {
      detail,
      commentsShow,
      commentNum,
      num,
      changing,
      switchArticleShare
    } = this.props;
    return (
      <div className="article-detail po-r">
        <div className="title-img">
          <img src={detail.articleDetails.titleImg} alt="" />
        </div>
        <div className="show-info">
          <span className="article-tag">展览内容</span>
          <p
            dangerouslySetInnerHTML={{ __html: detail.articleDetails.showText }}
          ></p>
        </div>
        <div className="author-info">
          <span className="article-tag">作者介绍</span>
          <img src={detail.articleDetails.authorImg} alt="" />
          <p>{detail.articleDetails.authorText}</p>
        </div>
        <div className="works-info">
          <span className="article-tag">作品展示</span>
          <ul>
            {detail.articleDetails.showImg.map(ele => {
              return (
                <li key={ele}>
                  <img src={ele} alt="" />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="comments">
          <span className="article-tag">展览评论</span>
          <ul>
            {commentsShow.map(ele => {
              return (
                <li key={ele.id} className="comment-item df">
                  <div className="user-img">
                    <img src={ele.userImg} alt="" />
                  </div>
                  <div className="comment-content">
                    <div className="comment-user">
                      <span>{ele.userName}</span>
                      <span className="comment-time">{ele.commentTime}</span>
                    </div>
                    <p>{ele.commentText}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <span
            className="comment-more"
            onClick={() => {
              commentNum(detail.articleDetails.comments.length);
            }}
          >
            {num < detail.articleDetails.comments.length
              ? `展开全部${detail.articleDetails.comments.length}条评论`
              : "收起评论"}
          </span>
        </div>
        <div className="article-back po-f">
          <img
            onClick={this.props.history.goBack}
            src="https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/back.png"
            alt=""
          ></img>
        </div>
        <ArticleDetailBottom
          switchArticleShare={switchArticleShare}
        ></ArticleDetailBottom>
        <div
          className={`mask po-a ${changing ? "db" : "dn"}`}
          onClick={() => switchArticleShare(false)}
        ></div>
        <div className={`article-share po-f ${changing ? "" : "off"}`}>
          <img
            onClick={() => switchArticleShare(false)}
            src="https://dev.tencent.com/u/baseon2016/p/stocked-stuff/git/raw/master/ps-pics/article-share.jpg"
            alt=""
          ></img>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    ...state.articleShare
  };
};
export default connect(
  mapStateToProps,
  { switchArticleShare }
)(ArticleDetail);
