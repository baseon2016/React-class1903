import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
class List extends Component {
  state = {
    type: "all"
  };
  componentDidMount() {
    const { type } = this.state;
    const { search } = this.props.location;
    if (search) {
      axios
        .get(`http://localhost:5000/topics/?tab=${search.replace("?tab=", "")}`)
        .then(res => {
          console.log(res.data);
          this.setState({
            type: search.replace("?tab=", "")
          });
        });
    } else {
      axios.get(`http://localhost:5000/topics/?tab=${type}`).then(res => {
        console.log(res.data);
        this.setState({
          type: "all"
        });
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
      axios
        .get(`https://www.vue-js.com/api/v1/topics/?tab=${type}`)
        .then(res => console.log(res.data.data));
    }
  }
  render() {
    const { search } = this.props.location;
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
        <div>{this.state.type}类别列表</div>
      </div>
    );
  }
}

export default List;
