import React from "react";
import InfoTittle from "./InfoTittle";
const Info = props => {
  const { showProducts } = props;
  const sporting = showProducts.filter(
    ele => ele.category === "Sporting Goods"
  );
  const electronics = showProducts.filter(
    ele => ele.category === "Electronics"
  );
  return (
    <div className="info">
      <div className="tittle df">
        <span>Name</span>
        <span>Price</span>
      </div>
      <InfoTittle category={sporting} title="Sporting Goods" />
      <InfoTittle category={electronics} title="Electronics" />
    </div>
  );
};

export default Info;
