import React from "react";
import Routers from "./components/Routers";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <Router className="App">
      <Header />
      <ul>
        <li>
          <NavLink
            to="/"
            activeStyle={{ backgroundColor: "red" }}
            className="nav-item"
            activeClassName="active"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/newabout"
            activeStyle={{ backgroundColor: "red" }}
            className="nav-item"
            activeClassName="active"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/topics"
            activeStyle={{ backgroundColor: "red" }}
            className="nav-item"
            activeClassName="active"
          >
            Topics
          </NavLink>
        </li>
      </ul>
      <Routers />
    </Router>
  );
}

export default App;
//  使用activeClassName 添加exact属性 添加激活时的类名还可以用activeStyle 直接添加激活时的样式
