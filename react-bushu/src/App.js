import React from "react";
import Main from "./components/Main";
import { BrowserRouter as Router, Link } from "react-router-dom";
function App() {
  return (
    <Router className="App">
      <h1>部署</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Main />
    </Router>
  );
}

export default App;
