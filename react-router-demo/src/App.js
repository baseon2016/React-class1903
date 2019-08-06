import React from "react";
import Routers from "./components/Routers";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
function App() {
  return (
    <Router className="App">
      <ul>
        <li>
          <NavLink to="/" activeStyle={{ color: "red" }} className="nav-item">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            activeStyle={{ color: "red" }}
            className="nav-item"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            activeStyle={{ color: "red" }}
            className="nav-item"
          >
            Users
          </NavLink>
        </li>
      </ul>
      <Routers />
    </Router>
  );
}

export default App;
//  使用activeClassName 添加exact属性 添加激活时的类名还可以用activeStyle 直接添加激活时的样式
