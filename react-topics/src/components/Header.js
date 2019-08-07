import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./../css/header.scss";
import styled from "styled-components";
class Header extends Component {
  state = {};
  render() {
    return (
      <div className="vue-head">
        <div className="vue-head-inner container">
          <NavLink to="/">
            <img src="https://www.vue-js.com/public/images/vue.png" alt="" />
          </NavLink>
          <Span>中文社区</Span>
        </div>
      </div>
    );
  }
}
// 样式组件，样式私有化
const Span = styled.span`
  color: red;
  :hover {
    color: teal;
  }
`;
export default Header;
