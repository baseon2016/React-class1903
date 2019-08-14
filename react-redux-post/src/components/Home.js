import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import store from "../store";
import axios from "axios";
import "../css/Home.css";
class Home extends Component {
  componentDidMount() {
    axios.get("http://localhost:5000/posts").then(res => {
      store.dispatch({ type: "GETPOSTS", payload: res.data });
    });
    axios.get("http://localhost:5000/comments").then(res => {
      store.dispatch({ type: "GETCOMMENTS", payload: res.data });
    });
  }
  render() {
    const { posts } = this.props;
    const showPosts = posts.length ? (
      <ul className="articles">
        {posts.map(ele => {
          return (
            <Link to={`/post/${ele.id}`} key={ele.id}>
              {ele.title}
            </Link>
          );
        })}
      </ul>
    ) : (
      <div>请稍等</div>
    );
    return <div className="home">{showPosts}</div>;
  }
}
const mapStateToProps = state => {
  return { posts: state.posts };
};
export default connect(mapStateToProps)(Home);
