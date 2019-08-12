import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./blog.css";
class Blogs extends Component {
  state = {
    blogs: [],
    pageNum: 0,
    showLoading: false
  };
  componentDidMount() {
    const { type } = this.props.match.params;

    axios
      .get(`/api/article/${type === "index" ? "list" : "listproject"}/0/json`)
      .then(res => {
        console.log(res.data.data.datas);
        this.setState({
          blogs: res.data.data.datas
        });
      });
    window.onscroll = () => {
      // console.log(document.querySelector("body").clientHeight);
      // console.log(window.scrollY);
      // console.log(window.innerHeight);
      const { pageNum, showLoading } = this.state;
      if (showLoading === false) {
        if (
          document.querySelector("body").clientHeight -
            window.scrollY -
            window.innerHeight <
          10
        ) {
          this.setState({
            pageNum: pageNum + 1,
            showLoading: true
          });
        }
      }
    };
  }
  componentDidUpdate(prevProps, prevState) {
    const { type } = this.props.match.params;
    const { blogs, pageNum } = this.state;
    if (prevState.pageNum !== this.state.pageNum) {
      axios
        .get(
          `/api/article/${
            type === "index" ? "list" : "listproject"
          }/${pageNum}/json`
        )
        .then(res => {
          this.setState({
            blogs: [...blogs, ...res.data.data.datas],
            showLoading: false
          });
        });
    }
  }
  render() {
    const { blogs, showLoading } = this.state;
    const showBlogs = blogs.length ? (
      blogs.map(ele => {
        return (
          <div className="block " key={ele.id}>
            <div className="block-inner df">
              <div className="info-opt">
                <span className="collect" />
              </div>
              <div className="blog">
                <p>
                  <Link to={ele.link}>{ele.title}</Link>
                </p>
                <div className="info-art df">
                  <span className="istop">&nbsp;置顶&nbsp;</span>
                  <span className="fresh">&nbsp;新&nbsp;</span>
                  <span>问答</span>
                  <span>作者: {ele.author}</span>
                  <span>
                    分类:{ele.superChapterName + "/" + ele.chapterName}
                  </span>
                  <span>时间:{ele.niceDate}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <div>请稍等</div>
    );

    return (
      <div className="blogs ">
        {showBlogs}
        <div style={{ display: showLoading ? "block" : "none" }}>
          请稍等......
        </div>
      </div>
    );
  }
}

export default Blogs;
