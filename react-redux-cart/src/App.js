import React from "react";
import ProductListContainer from "./components/ProductListContainer";
import CartContainer from "./components/CartContainer";
function App(props) {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <ProductListContainer />
      <hr />
      <CartContainer />
    </div>
  );
}

export default App;
