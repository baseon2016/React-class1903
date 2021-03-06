import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import InfiniteLoader from "react-infinite-loader";
import "./blog.css";
class Blogs extends Component {
  state = {
    blogs: [],
    pageNum: 0
  };
  componentDidMount() {
    const type = this.props.match.params.type || "index";

    axios
      .get(`/api/article/${type === "index" ? "list" : "listproject"}/0/json`)
      .then(res => {
        this.setState({
          blogs: res.data.data.datas
        });
      });
  }
  componentDidUpdate(prevProps, prevState) {
    const type = this.props.match.params.type || "index";
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
            blogs: [...blogs, ...res.data.data.datas]
          });
        });
    }
  }
  handleVisit = () => {
    const { pageNum } = this.state;
    this.setState({
      pageNum: pageNum + 1
    });
  };
  render() {
    const { blogs } = this.state;
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
        <InfiniteLoader
          loaderStyle={{
            width: "50px",
            height: "50px",
            borderColor:
              "rgba(0, 127, 255, 0.2) rgba(0, 127, 255, 0.2) rgba(0, 127, 255, 0.2) rgb(255, 255, 255)",
            margin: "20px 20px"
          }}
          visitStyle={{ backgroundColor: "#fff", marginBottom: "20px" }}
          onVisited={this.handleVisit}
        />
      </div>
    );
  }
}

export default Blogs;
