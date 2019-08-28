import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./articledetailbottom.css";
class ArticleDetailBottom extends Component {
  state = {};
  render() {
    const { switchArticleShare } = this.props;
    return (
      <div className="detail-bottom po-f">
        <ul className="df">
          <li>
            <Link to="/tohere">
              <span className="iconfont iconxin"></span>关注
            </Link>
          </li>
          <li>
            <Link to="/tohere">
              <span className="iconfont iconluxian"></span>到这
            </Link>
          </li>
          <li onClick={() => switchArticleShare(true)}>
            <span className="iconfont iconshare"></span>
            分享
          </li>
          <li>
            <Link to="/tohere">
              <span className="iconfont iconpinglun"></span>评论
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default ArticleDetailBottom;
