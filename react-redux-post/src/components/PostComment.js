import React, { Component } from "react";
class PostComment extends Component {
  state = {};
  render() {
    return <div>{this.props.comment.text}</div>;
  }
}

export default PostComment;
