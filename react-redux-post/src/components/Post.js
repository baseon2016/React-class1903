import React, { Component } from "react";
import PostBody from "./PostBody";
import PostComment from "./PostComment";
class Post extends Component {
  state = {};
  render() {
    return (
      <div>
        <PostBody />
        <PostComment />
      </div>
    );
  }
}

export default Post;
