import React, { Component } from "react";
import "./articledetail.css";
class ArticleDetail extends Component {
  state = {};
  render() {
    const { detail } = this.props;
    return (
      <div className="article-detail">
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
            {detail.articleDetails.comments.map(ele => {
              return (
                <li key={ele.id}>
                  <div>
                    <img src={ele.userImg} alt="" />
                  </div>
                  <div>
                    <div>
                      <span>{ele.userName}</span>
                      <span>{ele.commentTime}</span>
                    </div>
                    <p>{ele.commentText}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ArticleDetail;
