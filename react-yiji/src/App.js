import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Guide from "./components/Guide";
function App() {
  return (
    <Router className="App">
      <Guide />
    </Router>
  );
}

export default App;
