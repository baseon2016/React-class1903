import React, { Component } from "react";
import axios from "axios";
import { addComment, delComment } from "../store/actions";
import { connect } from "react-redux";
class PostComment extends Component {
  state = {
    val: ""
  };
  changeInput = event => {
    this.setState({
      val: event.target.value
    });
  };
  doComment = event => {
    // event.preventDefault();
    if (event.key === "Enter" && event.target.value.trim()) {
      this.props.addComment({ val: this.state.val, postId: this.props.postId });
      this.setState({
        val: ""
      });
    }
  };
  delComment = id => {
    this.props.delComment(id);
  };
  render() {
    const { comments } = this.props;
    const commentList = comments.length ? (
      <ul>
        {[...comments].reverse().map(ele => {
          return (
            <li key={ele.id}>
              <span>{ele.text}</span>
              <span onClick={() => this.delComment(ele.id)}>X</span>
            </li>
          );
        })}
      </ul>
    ) : (
      <div>请稍等...</div>
    );

    return (
      <div>
        <h2>评论</h2>
        {commentList}
        <textarea
          value={this.state.val}
          onChange={event => {
            this.changeInput(event);
          }}
          onKeyPress={this.doComment}
          cols="30"
          rows="10"
        />
      </div>
    );
  }
}

export default connect(
  null,
  { addComment, delComment }
)(PostComment);
