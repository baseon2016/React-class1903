import React, { Component } from "react";
class PostBody extends Component {
  state = {};
  render() {
    return <div>{this.props.post.content}</div>;
  }
}

export default PostBody;
