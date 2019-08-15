import React, { Component } from "react";
import PostBody from "./PostBody";
import PostComment from "./PostComment";
import axios from "axios";
import { connect } from "react-redux";
import { getComments } from "../store/actions";
class Post extends Component {
  state = {
    post: {}
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`http://localhost:5000/posts/${id}`).then(res => {
      this.setState({
        post: res.data
      });
    });

    this.props.getComments(id);
  }
  render() {
    const { post } = this.state;
    const { comments } = this.props;
    const { id } = this.props.match.params;
    return (
      <div>
        <PostBody post={post} />
        <PostComment comments={comments} postId={id} />
        <button onClick={this.props.history.goBack}>后退</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    comments: state.comments
  };
};
export default connect(
  mapStateToProps,
  { getComments }
)(Post);
