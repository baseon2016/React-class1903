import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../css/list.scss";
import axios from "axios";
class List extends Component {
  state = {
    type: "",
    list: []
  };
  componentDidMount() {
    // const { type } = this.state;
    const { search } = this.props.location;
    if (search && search !== "?tab=all") {
      this.setState({
        type: search.replace("?tab=", "")
      });
    } else {
      this.setState({
        type: "all"
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.search !== this.props.location.search) {
      this.setState({
        type: this.props.location.search.replace("?tab=", "")
      });
    }
    if (prevState.type !== this.state.type) {
      const { type } = this.state;
      if (type === "all") {
        axios.get(`http://localhost:5000/topics/`).then(res => {
          this.setState({
            list: res.data
          });
        });
      } else {
        axios.get(`http://localhost:5000/topics?tab=${type}`).then(res => {
          this.setState({
            list: res.data
          });
        });
      }
    }
  }
  render() {
    const { search } = this.props.location;
    const { list } = this.state;
    console.log(list);
    const showList = list.map(ele => {
      return (
        <div className="list-item" key={ele.id}>
          <NavLink to={`/topic/${ele.id}`}>
            <span>{ele.tab}</span>
            <span>{ele.title}</span>
          </NavLink>
        </div>
      );
    });
    return (
      <div>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            width: "200px",
            justifyContent: "space-between"
          }}
        >
          <li>
            <NavLink
              style={{
                color: search === "" || search === "?tab=all" ? "red" : ""
              }}
              to="/?tab=all"
              activeClassName="active"
            >
              全部
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{ color: search === "?tab=good" ? "red" : "" }}
              to="/?tab=good"
              activeClassName="active"
            >
              精华
            </NavLink>
          </li>

          <li>
            <NavLink
              style={{ color: search === "?tab=ask" ? "red" : "" }}
              to="/?tab=ask"
              activeClassName="active"
            >
              问答
            </NavLink>
          </li>
        </ul>
        <div>{showList}</div>
      </div>
    );
  }
}

export default List;
