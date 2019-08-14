import React, { Component } from "react";
import PostBody from "./PostBody";
import PostComment from "./PostComment";
import { connect } from "react-redux";
class Post extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const { id } = this.props.match.params;
    const { posts, comments } = this.props;
    const post = posts.find(ele => ele.id === id);
    const comment = comments.find(ele => ele.postId === id);
    return (
      <div>
        <PostBody post={post} />
        <PostComment comment={comment} />
        <button onClick={this.props.history.goBack}>后退</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    posts: state.posts,
    comments: state.comments
  };
};
export default connect(mapStateToProps)(Post);
