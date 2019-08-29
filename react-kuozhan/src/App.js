import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Main from "./components/Main";
function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">主页</Link>
        </li>
        <li>
          <Link to="/about">关于</Link>
        </li>
      </ul>
      <Main></Main>
    </Router>
  );
}

export default App;
