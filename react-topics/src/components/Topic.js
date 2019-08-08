import React, { Component } from "react";
import axios from "axios";
class Topic extends Component {
  state = {
    article: null
  };
  componentDidMount() {
    axios
      .get(`http://localhost:5000/topics/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          article: res.data
        });
      });
  }
  render() {
    const { article } = this.state;
    return (
      <div>
        {article ? (
          <div>
            <h3>{article.title}</h3>
            {/* 在react中解析渲染字符串中的html标签 */}
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
        ) : (
          <div>稍等一下，马上加载</div>
        )}
      </div>
    );
  }
}

export default Topic;
