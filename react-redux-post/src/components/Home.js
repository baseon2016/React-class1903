import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/Home.css";
class Home extends Component {
  componentDidMount() {
    axios.get();
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
