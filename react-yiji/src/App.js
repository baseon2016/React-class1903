import React from "react";
import { HashRouter as Router } from "react-router-dom";

import Main from "./components/Main";

function App() {
  return (
    <Router className="App">
      <Main />
    </Router>
  );
}

export default App;
