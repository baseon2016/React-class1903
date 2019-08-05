import React from "react";
const InfoItem = props => {
  const { infoItem } = props;
  return (
    <div className="info-item df">
      <span className={`name ${infoItem.stocked ? "" : "nostock"}`}>
        {infoItem.name}
      </span>
      <span className="price">{infoItem.price}</span>
    </div>
  );
};

export default InfoItem;
