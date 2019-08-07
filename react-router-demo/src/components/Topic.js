import React, { Component } from "react";
class Topic extends Component {
  state = { title: "" };
  componentDidMount() {
    if (
      this.props.match.params.id !== "hot" &&
      this.props.match.params.id !== "new" &&
      this.props.match.params.id !== "hottest"
    ) {
      this.props.history.push("/error");
    } else {
      this.setState({
        title: this.props.match.params.id
      });
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.setState({
        title: this.props.match.params.id
      });
    }
  }
  render() {
    return <div>{this.state.title}个人信息页</div>;
  }
}

export default Topic;
