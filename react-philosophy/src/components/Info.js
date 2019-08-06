import React from "react";
import InfoTittle from "./InfoTittle";
const Info = props => {
  const { showProducts } = props;

  const tittles = showProducts.map(ele => {
    return (
      <InfoTittle
        category={ele.list}
        key={ele.category}
        tittle={ele.category}
      />
    );
  });

  return (
    <div className="info">
      <div className="tittle df">
        <span>Name</span>
        <span>Price</span>
      </div>
      {tittles}
    </div>
  );
};

export default Info;
