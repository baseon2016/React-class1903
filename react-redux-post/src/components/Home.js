import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../css/Home.css";
import { getPosts } from "../store/actions";
class Home extends Component {
  componentDidMount() {
    this.props.getPosts();
  }
  render() {
    const { posts } = this.props;
    const showPosts = posts.length ? (
      <ul className="articles">
        {[...posts].reverse().map(ele => {
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
//可以利用mapDispatchToProps将action 创建函数附带上 dispatch功能,这样就直接执行 action 创建函数默认触发dispatch
// 下面的写法是mapDispatchToProps的语法糖
// 这样会把该action创建函数重新整理（带了dispatch 会自动触发action）并且放在组件的props内
export default connect(
  mapStateToProps,
  { getPosts }
)(Home);
