import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./blog.css";
class Blogs extends Component {
  state = {
    blogs: []
  };
  componentDidMount() {
    axios.get("/api/article/list/0/json").then(res => {
      console.log(res.data.data.datas);
      const { blogs } = this.state;
      this.setState({
        blogs: [...blogs, ...res.data.data.datas]
      });
    });
  }

  render() {
    const { blogs } = this.state;
    console.log(blogs.length);
    const showBlogs = blogs.map(ele => {
      return (
        <div className="block " key={ele.chapterId}>
          <div className="block-inner df">
            <div className="info-opt">
              <span className="collect" />
            </div>
            <div className="blog">
              <p>
                <Link to={ele.link}>{ele.title}</Link>
              </p>
              <div className="df">
                <span>置顶</span>
                <span>新</span>
                <span>问答</span>
                <span>作者:{"xiaoyang"}</span>
                <span>分类:{"问答/官方"}</span>
                <span>时间:{"一小时前"}</span>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="blogs ">
        {blogs.length ? showBlogs : <div>请稍等</div>}
      </div>
    );
  }
}

export default Blogs;
