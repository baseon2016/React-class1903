import React from "react";
import InfoItem from "./InfoItem";
const InfoTittle = props => {
  const items = props.category.map(ele => {
    return <InfoItem infoItem={ele} key={ele.id} />;
  });
  return props.category.length ? (
    <div className="info-tittle">
      <span className="category">{props.title}</span>
      {items}
    </div>
  ) : (
    <div className="dn" />
  );
};

export default InfoTittle;
