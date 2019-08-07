import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router className="App">
      <Header />
      <Main />
    </Router>
  );
}

export default App;
