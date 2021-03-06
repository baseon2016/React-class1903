import React, { Component } from "react";
import {} from "react-redux";

class PostBody extends Component {
  render() {
    const { post } = this.props;
    return (
      <div>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    );
  }
}

export default PostBody;
